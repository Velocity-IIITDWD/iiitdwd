<?php
/**
 * API Controller
 * Handles AJAX API requests for file operations
 */

class ApiController {
    
    /**
     * Handle API requests
     */
    public static function handleRequest() {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST' || !isset($_POST['operation'])) {
            return;
        }
        
        header('Content-Type: application/json');
        
        $response = match ($_POST['operation']) {
            'upload' => FileManager::upload(),
            'rename' => FileManager::rename(),
            'delete' => FileManager::delete(),
            default => ['success' => false, 'message' => 'Invalid operation']
        };
        
        echo json_encode($response);
        exit;
    }
}
?> 