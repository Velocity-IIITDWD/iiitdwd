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
        
        // Replace match expression with switch for PHP 7.4+ compatibility
        $operation = $_POST['operation'];
        switch ($operation) {
            case 'checkFileExists':
                $response = FileManager::checkFileExists();
                break;
            case 'upload':
                $response = FileManager::upload();
                break;
            case 'rename':
                $response = FileManager::rename();
                break;
            case 'delete':
                $response = FileManager::delete();
                break;
            default:
                $response = ['success' => false, 'message' => 'Invalid operation'];
                break;
        }
        
        echo json_encode($response);
        exit;
    }
}
?> 