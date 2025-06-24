<?php
/**
 * IIIT Dharwad Assets Management System
 * Main application entry point
 */

// Bootstrap the application
require_once 'config/app.php';
require_once 'src/utils/security.php';
require_once 'src/utils/helpers.php';
require_once 'src/models/Auth.php';
require_once 'src/models/FileManager.php';
require_once 'src/controllers/ApiController.php';

// Handle API requests first
ApiController::handleRequest();

// Handle authentication
$authError = Auth::handleAuthRequest();
$isAdmin = Auth::isAuthenticated();

// Set security headers
setSecurityHeaders();

// Initialize session and CSRF
startSecureSession();
$csrfToken = generateCSRFToken();

// Validate required directories
validateDirectories([DOCS_PATH, IMAGES_PATH]);

// Get files from directories
try {
    $docs = getFilesFromDirectory(DOCS_PATH, 'doc');
    $images = getFilesFromDirectory(IMAGES_PATH, 'img');
    $allFiles = array_merge($docs, $images);
    
    // Sort files by name
    usort($allFiles, function($a, $b) {
        return strcmp($a['name'], $b['name']);
    });
} catch (Exception $e) {
    http_response_code(500);
    die('Error: Failed to read directories.');
}

// Capture the main content
ob_start();
include 'src/views/file-list.php';
$content = ob_get_clean();

// Render the layout
include 'src/views/layout.php';
?>