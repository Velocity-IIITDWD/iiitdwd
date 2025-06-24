<?php
/**
 * Application Configuration
 * Central configuration file for the Assets Management System
 */

require_once __DIR__ . '/../src/utils/env.php';

// Security configuration
define('ADMIN_USERNAME', env('ADMIN_USERNAME', 'admin'));
define('ADMIN_PASSWORD', env('ADMIN_PASSWORD_HASH') ?: password_hash(env('ADMIN_PASSWORD', 'admin123'), PASSWORD_DEFAULT));
define('SESSION_TIMEOUT', (int)env('SESSION_TIMEOUT', 3600));
define('CSRF_SECRET', env('CSRF_SECRET', bin2hex(random_bytes(32))));

// Application configuration
define('APP_NAME', env('APP_NAME', 'IIIT Dharwad Assets'));
define('APP_URL', env('APP_URL', 'https://assets.iiitdwd.ac.in'));
define('DEBUG', filter_var(env('DEBUG', 'false'), FILTER_VALIDATE_BOOLEAN));

// File upload configuration
define('MAX_FILE_SIZE', (int)env('MAX_FILE_SIZE', 100 * 1024 * 1024)); // 100MB default

// Application paths
define('APP_ROOT', dirname(__DIR__));
define('PUBLIC_PATH', APP_ROOT . '/public');
define('DOCS_PATH', APP_ROOT . '/docs');
define('IMAGES_PATH', APP_ROOT . '/images');

// Ensure directories exist
if (!is_dir(DOCS_PATH)) {
    mkdir(DOCS_PATH, 0755, true);
}
if (!is_dir(IMAGES_PATH)) {
    mkdir(IMAGES_PATH, 0755, true);
}
?> 