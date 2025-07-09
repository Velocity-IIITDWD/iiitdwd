#!/usr/bin/env php
<?php
/**
 * Test script for floating-images API
 */

echo "Testing the floating-images API endpoint...\n\n";

// Test the API endpoint
$apiUrl = 'http://localhost/apps/assets/floating-images.php';
$response = @file_get_contents($apiUrl);

if ($response === false) {
    echo "❌ Failed to connect to API endpoint\n";
    echo "URL: $apiUrl\n";
    echo "Make sure your local server is running\n";
    exit(1);
}

$data = json_decode($response, true);

if ($data === null) {
    echo "❌ Invalid JSON response\n";
    echo "Raw response: $response\n";
    exit(1);
}

if (!isset($data['success'])) {
    echo "❌ Invalid response structure\n";
    echo "Response: " . json_encode($data, JSON_PRETTY_PRINT) . "\n";
    exit(1);
}

if ($data['success']) {
    echo "✅ API endpoint working correctly!\n";
    echo "📊 Response structure:\n";
    echo "   - Success: " . ($data['success'] ? 'true' : 'false') . "\n";
    echo "   - Total images: " . ($data['count'] ?? 0) . "\n";
    echo "   - Total size: " . ($data['formatted_total_size'] ?? 'N/A') . "\n";
    
    if (!empty($data['data'])) {
        echo "\n📋 Sample images:\n";
        foreach (array_slice($data['data'], 0, 3) as $image) {
            echo "   - {$image['filename']} ({$image['formatted_size']})\n";
        }
    }
} else {
    echo "❌ API returned error:\n";
    echo "   Message: " . ($data['message'] ?? 'Unknown error') . "\n";
    echo "   Error: " . ($data['error'] ?? 'No error details') . "\n";
}

echo "\n🔗 API URL: $apiUrl\n";
echo "📖 Documentation: See README.md for usage examples\n";
?>
