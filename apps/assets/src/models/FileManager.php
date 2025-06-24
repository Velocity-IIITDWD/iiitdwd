<?php
/**
 * File Manager Model
 * Handles file upload, rename, and delete operations
 */

class FileManager {
    
    /**
     * Validate file upload
     * @param array $file File from $_FILES
     * @param string $targetType Target type (docs/images)
     * @return string|null Error message if invalid, null if valid
     */
    public static function validateFileUpload($file, $targetType) {
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
        
        return null; // No errors
    }
    
    /**
     * Check if file exists before upload
     * @return array Response array with success status and file existence info
     */
    public static function checkFileExists() {
        if (!Auth::isAuthenticated()) {
            return ['success' => false, 'message' => 'Authentication required'];
        }
        
        if (!validateCSRFToken($_POST['csrf_token'] ?? '')) {
            return ['success' => false, 'message' => 'Invalid security token'];
        }
        
        $filename = sanitizeFilename($_POST['filename'] ?? '');
        $targetType = $_POST['target_type'] ?? '';
        
        if (empty($filename) || empty($targetType)) {
            return ['success' => false, 'message' => 'Missing filename or target type'];
        }
        
        if (!in_array($targetType, ['docs', 'images'])) {
            return ['success' => false, 'message' => 'Invalid target type'];
        }
        
        // Prepare paths
        $targetDir = ($targetType === 'images') ? IMAGES_PATH : DOCS_PATH;
        $targetPath = $targetDir . '/' . $filename;
        
        return [
            'success' => true,
            'exists' => file_exists($targetPath),
            'filename' => $filename
        ];
    }

    /**
     * Handle file upload
     * @return array Response array with success status and message
     */
    public static function upload() {
        if (!Auth::isAuthenticated()) {
            return ['success' => false, 'message' => 'Authentication required'];
        }
        
        if (!validateCSRFToken($_POST['csrf_token'] ?? '')) {
            return ['success' => false, 'message' => 'Invalid security token'];
        }
        
        if (!isset($_FILES['file'])) {
            return ['success' => false, 'message' => 'No file provided'];
        }
        
        $file = $_FILES['file'];
        $targetType = $_POST['target_type'] ?? '';
        $replaceFile = isset($_POST['replace_file']) && $_POST['replace_file'] === 'true';
        
        // Validate target type is selected
        if (empty($targetType) || !in_array($targetType, ['docs', 'images'])) {
            return ['success' => false, 'message' => 'Please select a file type (Documents or Images)'];
        }
        
        // Validate upload
        $error = self::validateFileUpload($file, $targetType);
        if ($error) {
            return ['success' => false, 'message' => $error];
        }
        
        // Prepare paths
        $filename = sanitizeFilename($file['name']);
        $targetDir = ($targetType === 'images') ? IMAGES_PATH : DOCS_PATH;
        $targetPath = $targetDir . '/' . $filename;
        
        // Check if file already exists and replacement is not allowed
        if (file_exists($targetPath) && !$replaceFile) {
            return [
                'success' => false, 
                'message' => 'File already exists',
                'fileExists' => true,
                'filename' => $filename
            ];
        }
        
        // Move uploaded file (this will overwrite if replaceFile is true)
        if (move_uploaded_file($file['tmp_name'], $targetPath)) {
            $message = $replaceFile ? 'File replaced successfully' : 'File uploaded successfully';
            return [
                'success' => true, 
                'message' => $message,
                'filename' => $filename,
                'targetType' => $targetType
            ];
        }
        
        return ['success' => false, 'message' => 'Failed to save file'];
    }
    
    /**
     * Handle file rename
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
        $fileType = $_POST['file_type'] ?? 'docs';
        
        if (empty($oldName) || empty($newName)) {
            return ['success' => false, 'message' => 'Invalid filenames provided'];
        }
        
        // Prepare paths
        $dir = ($fileType === 'img') ? IMAGES_PATH : DOCS_PATH;
        $oldPath = $dir . '/' . $oldName;
        $newPath = $dir . '/' . $newName;
        
        // Validate source file exists
        if (!file_exists($oldPath)) {
            return ['success' => false, 'message' => 'Source file not found'];
        }
        
        // Check if target already exists
        if (file_exists($newPath)) {
            return ['success' => false, 'message' => 'Target filename already exists'];
        }
        
        // Rename file
        if (rename($oldPath, $newPath)) {
            return ['success' => true, 'message' => 'File renamed successfully'];
        }
        
        return ['success' => false, 'message' => 'Failed to rename file'];
    }
    
    /**
     * Handle file deletion
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
        $fileType = $_POST['file_type'] ?? 'docs';
        
        if (empty($filename)) {
            return ['success' => false, 'message' => 'Invalid filename provided'];
        }
        
        // Prepare path
        $dir = ($fileType === 'img') ? IMAGES_PATH : DOCS_PATH;
        $filePath = $dir . '/' . $filename;
        
        // Validate file exists
        if (!file_exists($filePath)) {
            return ['success' => false, 'message' => 'File not found'];
        }
        
        // Delete file
        if (unlink($filePath)) {
            return ['success' => true, 'message' => 'File deleted successfully'];
        }
        
        return ['success' => false, 'message' => 'Failed to delete file'];
    }
}
?> 