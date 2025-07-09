<?php
/**
 * Test script to verify the floating images API works correctly
 */

// Capture output
ob_start();

// Include the API file
include __DIR__ . '/apps/assets/api/floating-images.php';

// Get the output
$output = ob_get_clean();

echo "API Response:\n";
echo $output . "\n";

// Try to decode the JSON response
$response = json_decode($output, true);

if ($response) {
    echo "\nParsed Response:\n";
    echo "Success: " . ($response['success'] ? 'true' : 'false') . "\n";
    
    if ($response['success']) {
        echo "Count: " . $response['count'] . "\n";
        echo "Total Size: " . $response['formatted_total_size'] . "\n";
        echo "Images:\n";
        
        foreach ($response['data'] as $image) {
            echo "  - " . $image['filename'] . " (" . $image['formatted_size'] . ")\n";
        }
    } else {
        echo "Error: " . $response['error'] . "\n";
        if (isset($response['message'])) {
            echo "Message: " . $response['message'] . "\n";
        }
    }
} else {
    echo "\nFailed to parse JSON response\n";
}
?>
