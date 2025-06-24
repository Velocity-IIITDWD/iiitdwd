<?php
/**
 * Environment Variable Loader
 * Simple utility for loading environment variables from .env file
 */

/**
 * Load environment variables from a file
 * @param string $file Path to the .env file
 */
function loadEnv($file = '.env') {
    // Look for .env file in the application root
    $envPath = dirname(dirname(__DIR__)) . '/' . $file;
    
    if (!file_exists($envPath)) {
        return;
    }
    
    $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    
    foreach ($lines as $line) {
        // Skip comments
        if (strpos(trim($line), '#') === 0) {
            continue;
        }
        
        // Parse key=value pairs
        if (strpos($line, '=') !== false) {
            list($key, $value) = explode('=', $line, 2);
            $key = trim($key);
            $value = trim($value);
            
            // Remove quotes if present
            if (preg_match('/^"(.*)"$/', $value) || preg_match('/^\'(.*)\'$/', $value)) {
                $value = substr($value, 1, -1);
            }
            
            // Set environment variable if not already set
            if (!isset($_ENV[$key])) {
                $_ENV[$key] = $value;
                putenv("$key=$value");
            }
        }
    }
}

/**
 * Get environment variable with optional default
 * @param string $key Variable name
 * @param mixed $default Default value if not found
 * @return mixed
 */
function env($key, $default = null) {
    return $_ENV[$key] ?? getenv($key) ?: $default;
}

// Load environment variables automatically
loadEnv();
?> 