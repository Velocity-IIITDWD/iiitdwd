<?php
/**
 * Simple API endpoint for hero images
 * Returns all hero image links in a clean format
 */

// Bootstrap the application
require_once 'config/app.php';
require_once 'src/models/FloatingImagesManager.php';

// Set headers for API response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'error' => 'Method not allowed. Only GET requests are supported.'
    ]);
    exit;
}

try {
    // Get all hero images
    $response = FloatingImagesManager::getImagesApi();
    
    // Return the response
    echo json_encode($response, JSON_PRETTY_PRINT);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Internal server error: ' . $e->getMessage()
    ]);
}
?>
