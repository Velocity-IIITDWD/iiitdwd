<?php
/**
 * Floating Images Manager Model
 * Handles floating images for homepage hero section
 */

class FloatingImagesManager {
    
    /**
     * Get all floating images sorted by upload date
     * @return array Array of image data with URL, filename, and upload time
     */
    public static function getAllImages() {
        $images = [];
        
        if (!is_dir(FLOATING_IMAGES_PATH)) {
            return $images;
        }
        
        $files = scandir(FLOATING_IMAGES_PATH);
        
        foreach ($files as $file) {
            if ($file === '.' || $file === '..') {
                continue;
            }
            
            $filePath = FLOATING_IMAGES_PATH . '/' . $file;
            
            // Check if it's a valid image file
            if (is_file($filePath) && self::isValidImageFile($file)) {
                // Generate relative URL for local development
                $baseUrl = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https://' : 'http://') . $_SERVER['HTTP_HOST'];
                $relativePath = str_replace(APP_ROOT, '', $filePath);
                $url = $baseUrl . $relativePath;
                
                $images[] = [
                    'filename' => $file,
                    'url' => $url,
                    'upload_time' => filemtime($filePath),
                    'size' => filesize($filePath),
                    'type' => 'floating-img'
                ];
            }
        }
        
        // Sort by upload time (newest first)
        usort($images, function($a, $b) {
            return $b['upload_time'] - $a['upload_time'];
        });
        
        return $images;
    }
    
    /**
     * Get floating images API response
     * @return array API response with image URLs sorted by upload date
     */
    public static function getImagesApi() {
        $images = self::getAllImages();
        
        return [
            'success' => true,
            'data' => array_map(function($image) {
                return [
                    'url' => $image['url'],
                    'filename' => $image['filename'],
                    'upload_time' => $image['upload_time']
                ];
            }, $images),
            'count' => count($images)
        ];
    }
    
    /**
     * Validate if file is a valid image
     * @param string $filename
     * @return bool
     */
    private static function isValidImageFile($filename) {
        $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'];
        $extension = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
        return in_array($extension, $allowedExtensions);
    }
    
    /**
     * Handle bulk upload of floating images
     * @return array Response array with success status and message
     */
    public static function bulkUpload() {
        if (!Auth::isAuthenticated()) {
            return ['success' => false, 'message' => 'Authentication required'];
        }
        
        if (!validateCSRFToken($_POST['csrf_token'] ?? '')) {
            return ['success' => false, 'message' => 'Invalid security token'];
        }
        
        if (!isset($_FILES['files'])) {
            return ['success' => false, 'message' => 'No files provided'];
        }
        
        $files = $_FILES['files'];
        $uploadedFiles = [];
        $errors = [];
        
        // Handle multiple files
        $fileCount = count($files['name']);
        
        for ($i = 0; $i < $fileCount; $i++) {
            $file = [
                'name' => $files['name'][$i],
                'tmp_name' => $files['tmp_name'][$i],
                'error' => $files['error'][$i],
                'size' => $files['size'][$i]
            ];
            
            // Skip empty files
            if ($file['error'] === UPLOAD_ERR_NO_FILE) {
                continue;
            }
            
            // Validate file
            $error = self::validateImageUpload($file);
            if ($error) {
                $errors[] = $file['name'] . ': ' . $error;
                continue;
            }
            
            // Generate unique filename if duplicate exists
            $filename = self::generateUniqueFilename($file['name']);
            $targetPath = FLOATING_IMAGES_PATH . '/' . $filename;
            
            // Move uploaded file
            if (move_uploaded_file($file['tmp_name'], $targetPath)) {
                $uploadedFiles[] = $filename;
            } else {
                $errors[] = $file['name'] . ': Failed to save file';
            }
        }
        
        $response = [
            'success' => count($uploadedFiles) > 0,
            'uploaded_count' => count($uploadedFiles),
            'uploaded_files' => $uploadedFiles
        ];
        
        if (count($errors) > 0) {
            $response['errors'] = $errors;
        }
        
        if (count($uploadedFiles) > 0) {
            $response['message'] = count($uploadedFiles) . ' file(s) uploaded successfully';
        } else {
            $response['message'] = 'No files were uploaded';
        }
        
        return $response;
    }
    
    /**
     * Handle bulk deletion of floating images
     * @return array Response array with success status and message
     */
    public static function bulkDelete() {
        if (!Auth::isAuthenticated()) {
            return ['success' => false, 'message' => 'Authentication required'];
        }
        
        if (!validateCSRFToken($_POST['csrf_token'] ?? '')) {
            return ['success' => false, 'message' => 'Invalid security token'];
        }
        
        $filenames = $_POST['filenames'] ?? [];
        
        if (!is_array($filenames) || empty($filenames)) {
            return ['success' => false, 'message' => 'No files selected for deletion'];
        }
        
        $deletedFiles = [];
        $errors = [];
        
        foreach ($filenames as $filename) {
            $filename = sanitizeFilename($filename);
            if (empty($filename)) {
                continue;
            }
            
            $filePath = FLOATING_IMAGES_PATH . '/' . $filename;
            
            if (!file_exists($filePath)) {
                $errors[] = $filename . ': File not found';
                continue;
            }
            
            if (unlink($filePath)) {
                $deletedFiles[] = $filename;
            } else {
                $errors[] = $filename . ': Failed to delete file';
            }
        }
        
        $response = [
            'success' => count($deletedFiles) > 0,
            'deleted_count' => count($deletedFiles),
            'deleted_files' => $deletedFiles
        ];
        
        if (count($errors) > 0) {
            $response['errors'] = $errors;
        }
        
        if (count($deletedFiles) > 0) {
            $response['message'] = count($deletedFiles) . ' file(s) deleted successfully';
        } else {
            $response['message'] = 'No files were deleted';
        }
        
        return $response;
    }
    
    /**
     * Validate image upload
     * @param array $file File from $_FILES
     * @return string|null Error message if invalid, null if valid
     */
    private static function validateImageUpload($file) {
        if ($file['error'] !== UPLOAD_ERR_OK) {
            return 'Upload error occurred';
        }
        
        if ($file['size'] > MAX_FILE_SIZE) {
            $maxSizeMB = MAX_FILE_SIZE / 1024 / 1024;
            return "File too large (max {$maxSizeMB}MB)";
        }
        
        $filename = sanitizeFilename($file['name']);
        if (empty($filename)) {
            return 'Invalid filename';
        }
        
        if (!self::isValidImageFile($filename)) {
            return 'Invalid image file type';
        }
        
        return null; // No errors
    }
    
    /**
     * Generate unique filename to handle duplicates
     * @param string $originalName
     * @return string Unique filename
     */
    private static function generateUniqueFilename($originalName) {
        $filename = sanitizeFilename($originalName);
        $targetPath = FLOATING_IMAGES_PATH . '/' . $filename;
        
        // If file doesn't exist, return original name
        if (!file_exists($targetPath)) {
            return $filename;
        }
        
        // Extract name and extension
        $pathInfo = pathinfo($filename);
        $name = $pathInfo['filename'];
        $extension = $pathInfo['extension'] ?? '';
        
        $counter = 1;
        do {
            $newFilename = $name . '_' . $counter . ($extension ? '.' . $extension : '');
            $targetPath = FLOATING_IMAGES_PATH . '/' . $newFilename;
            $counter++;
        } while (file_exists($targetPath));
        
        return $newFilename;
    }
    
    /**
     * Handle individual file rename
     * @return array Response array with success status and message
     */
    public static function rename() {
        if (!Auth::isAuthenticated()) {
            return ['success' => false, 'message' => 'Authentication required'];
        }
        
        if (!validateCSRFToken($_POST['csrf_token'] ?? '')) {
            return ['success' => false, 'message' => 'Invalid security token'];
        }
        
        $oldName = sanitizeFilename($_POST['old_name'] ?? '');
        $newName = sanitizeFilename($_POST['new_name'] ?? '');
        
        if (empty($oldName) || empty($newName)) {
            return ['success' => false, 'message' => 'Invalid filenames provided'];
        }
        
        // Prepare paths
        $oldPath = FLOATING_IMAGES_PATH . '/' . $oldName;
        $newPath = FLOATING_IMAGES_PATH . '/' . $newName;
        
        // Validate source file exists
        if (!file_exists($oldPath)) {
            return ['success' => false, 'message' => 'Source file not found'];
        }
        
        // Check if target already exists
        if (file_exists($newPath)) {
            return ['success' => false, 'message' => 'Target filename already exists'];
        }
        
        // Validate new filename is a valid image
        if (!self::isValidImageFile($newName)) {
            return ['success' => false, 'message' => 'Invalid image file type'];
        }
        
        // Rename file
        if (rename($oldPath, $newPath)) {
            return ['success' => true, 'message' => 'Image renamed successfully'];
        }
        
        return ['success' => false, 'message' => 'Failed to rename image'];
    }
    
    /**
     * Handle individual file deletion
     * @return array Response array with success status and message
     */
    public static function delete() {
        if (!Auth::isAuthenticated()) {
            return ['success' => false, 'message' => 'Authentication required'];
        }
        
        if (!validateCSRFToken($_POST['csrf_token'] ?? '')) {
            return ['success' => false, 'message' => 'Invalid security token'];
        }
        
        $filename = sanitizeFilename($_POST['filename'] ?? '');
        
        if (empty($filename)) {
            return ['success' => false, 'message' => 'Invalid filename provided'];
        }
        
        // Prepare path
        $filePath = FLOATING_IMAGES_PATH . '/' . $filename;
        
        // Validate file exists
        if (!file_exists($filePath)) {
            return ['success' => false, 'message' => 'File not found'];
        }
        
        // Delete file
        if (unlink($filePath)) {
            return ['success' => true, 'message' => 'Image deleted successfully'];
        }
        
        return ['success' => false, 'message' => 'Failed to delete image'];
    }
}
?>
