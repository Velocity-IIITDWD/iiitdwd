<?php
/**
 * Simple API endpoint for floating images
 * Access: /floating-images
 */

// Set headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

// Load required files
require_once __DIR__ . '/config/app.php';
require_once __DIR__ . '/src/utils/helpers.php';
require_once __DIR__ . '/src/models/FloatingImagesManager.php';

try {
    // Get all floating images
    $images = FloatingImagesManager::getAllImages();
    
    // Return structured response
    $response = [
        'success' => true,
        'data' => array_map(function($image) {
            return [
                'url' => $image['url'],
                'filename' => $image['filename'],
                'size' => $image['size'],
                'upload_time' => $image['upload_time'],
                'formatted_size' => formatFileSize($image['size']),
                'formatted_date' => date('M j, Y', $image['upload_time'])
            ];
        }, $images),
        'count' => count($images),
        'total_size' => array_sum(array_column($images, 'size')),
        'formatted_total_size' => formatFileSize(array_sum(array_column($images, 'size')))
    ];
    
    echo json_encode($response);
    
} catch (Exception $e) {
    // Return error response
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Internal server error',
        'message' => $e->getMessage()
    ]);
}
?>
