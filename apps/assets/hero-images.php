<?php
/**
 * Hero Images Management Page
 * Handles floating images for homepage hero section
 */

// Bootstrap the application
require_once 'config/app.php';
require_once 'src/utils/security.php';
require_once 'src/utils/helpers.php';
require_once 'src/models/Auth.php';
require_once 'src/models/FileManager.php';
require_once 'src/models/FloatingImagesManager.php';
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

// Get floating images
try {
    $floatingImages = FloatingImagesManager::getAllImages();
} catch (Exception $e) {
    http_response_code(500);
    die('Error: Failed to read floating images directory.');
}

// Capture the main content
ob_start();
include 'src/views/hero-images.php';
$content = ob_get_clean();

// Render the layout
include 'src/views/layout.php';
?>
