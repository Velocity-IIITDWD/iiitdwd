<?php
/**
 * Helper Functions
 * Common utility functions for the assets management system
 */

/**
 * Convert bytes to human-readable format
 * @param int $bytes File size in bytes
 * @return string Formatted file size
 */
function formatFileSize($bytes) {
    $units = ['B', 'KB', 'MB', 'GB'];
    $bytes = max($bytes, 0);
    $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
    $pow = min($pow, count($units) - 1);
    $bytes /= pow(1024, $pow);
    return round($bytes, 2) . ' ' . $units[$pow];
}

/**
 * Get file extension in lowercase
 * @param string $filename File name
 * @return string File extension
 */
function getFileExtension($filename) {
    return strtolower(pathinfo($filename, PATHINFO_EXTENSION));
}

/**
 * Get files from a directory
 * @param string $dir Directory path
 * @param string $type File type identifier (doc/img)
 * @return array Array of file information
 */
function getFilesFromDirectory($dir, $type) {
    $files = [];
    
    if (!is_dir($dir) || !($handle = opendir($dir))) {
        return $files;
    }
    
    while (false !== ($file = readdir($handle))) {
        if ($file === '.' || $file === '..' || 
            !is_file($dir . '/' . $file) || 
            $file[0] === '.') {
            continue;
        }
        
        $files[] = [
            'name' => htmlspecialchars($file),
            'size' => filesize($dir . '/' . $file),
            'mtime' => filemtime($dir . '/' . $file),
            'ext' => getFileExtension($file),
            'type' => $type
        ];
    }
    
    closedir($handle);
    return $files;
}

/**
 * Set security headers
 */
function setSecurityHeaders() {
    header('Content-Type: text/html; charset=UTF-8');
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: DENY');
    header('X-XSS-Protection: 1; mode=block');
}

/**
 * Validate required directories exist
 * @param array $dirs Array of directory paths
 */
function validateDirectories($dirs) {
    foreach ($dirs as $dir) {
        if (!is_dir($dir)) {
            http_response_code(500);
            die("Error: Required directory '{$dir}' not found.");
        }
    }
}

/**
 * Sanitize filename to prevent security issues
 * @param string $filename Original filename
 * @return string Sanitized filename
 */
function sanitizeFilename($filename) {
    $filename = basename($filename); // Remove path traversal
    $filename = preg_replace('/[^a-zA-Z0-9._-]/', '_', $filename); // Remove dangerous chars
    $filename = ltrim($filename, '.'); // Prevent hidden files
    return $filename;
}
?> 