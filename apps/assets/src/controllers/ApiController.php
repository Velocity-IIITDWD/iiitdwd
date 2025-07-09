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
        // Handle GET requests for floating images API
        if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['api']) && $_GET['api'] === 'floating-images') {
            header('Content-Type: application/json');
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET');
            header('Access-Control-Allow-Headers: Content-Type');
            
            $response = FloatingImagesManager::getImagesApi();
            echo json_encode($response);
            exit;
        }
        
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
            case 'floatingImagesBulkUpload':
                $response = FloatingImagesManager::bulkUpload();
                break;
            case 'floatingImagesBulkDelete':
                $response = FloatingImagesManager::bulkDelete();
                break;
            case 'floatingImagesRename':
                $response = FloatingImagesManager::rename();
                break;
            case 'floatingImagesDelete':
                $response = FloatingImagesManager::delete();
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