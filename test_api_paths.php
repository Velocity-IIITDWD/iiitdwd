<?php
/**
 * Test script to verify API paths work correctly
 */

echo "Testing API paths...\n\n";

// Test the require_once paths from the API file
$apiFile = __DIR__ . '/apps/assets/api/floating-images.php';
$apiDir = dirname($apiFile);

echo "API file location: $apiFile\n";
echo "API directory: $apiDir\n\n";

// Test each required file path
$requiredFiles = [
    'config/app.php' => $apiDir . '/../config/app.php',
    'src/utils/helpers.php' => $apiDir . '/../src/utils/helpers.php',
    'src/models/FloatingImagesManager.php' => $apiDir . '/../src/models/FloatingImagesManager.php'
];

foreach ($requiredFiles as $description => $path) {
    $realPath = realpath($path);
    if ($realPath && file_exists($realPath)) {
        echo "✓ $description: $realPath\n";
    } else {
        echo "✗ $description: $path (NOT FOUND)\n";
    }
}

echo "\nTesting include functionality...\n";

// Test if we can include the config file
try {
    $configPath = $apiDir . '/../config/app.php';
    if (file_exists($configPath)) {
        include_once $configPath;
        echo "✓ Config file included successfully\n";
        echo "  - APP_ROOT: " . (defined('APP_ROOT') ? APP_ROOT : 'NOT DEFINED') . "\n";
        echo "  - FLOATING_IMAGES_PATH: " . (defined('FLOATING_IMAGES_PATH') ? FLOATING_IMAGES_PATH : 'NOT DEFINED') . "\n";
    } else {
        echo "✗ Config file not found\n";
    }
} catch (Exception $e) {
    echo "✗ Error including config: " . $e->getMessage() . "\n";
}

// Test if we can include the helpers file
try {
    $helpersPath = $apiDir . '/../src/utils/helpers.php';
    if (file_exists($helpersPath)) {
        include_once $helpersPath;
        echo "✓ Helpers file included successfully\n";
        echo "  - formatFileSize function: " . (function_exists('formatFileSize') ? 'EXISTS' : 'NOT FOUND') . "\n";
    } else {
        echo "✗ Helpers file not found\n";
    }
} catch (Exception $e) {
    echo "✗ Error including helpers: " . $e->getMessage() . "\n";
}

// Test if we can include the FloatingImagesManager file
try {
    $managerPath = $apiDir . '/../src/models/FloatingImagesManager.php';
    if (file_exists($managerPath)) {
        include_once $managerPath;
        echo "✓ FloatingImagesManager file included successfully\n";
        echo "  - FloatingImagesManager class: " . (class_exists('FloatingImagesManager') ? 'EXISTS' : 'NOT FOUND') . "\n";
    } else {
        echo "✗ FloatingImagesManager file not found\n";
    }
} catch (Exception $e) {
    echo "✗ Error including FloatingImagesManager: " . $e->getMessage() . "\n";
}

echo "\nPath resolution test complete!\n";
?>
