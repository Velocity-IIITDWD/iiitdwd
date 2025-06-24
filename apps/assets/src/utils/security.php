<?php
/**
 * Security Utilities
 * CSRF protection and session management functions
 */

/**
 * Start secure session with security settings
 */
function startSecureSession() {
    if (session_status() === PHP_SESSION_NONE) {
        ini_set('session.cookie_httponly', 1);
        ini_set('session.cookie_secure', isset($_SERVER['HTTPS']));
        ini_set('session.use_strict_mode', 1);
        session_start();
        
        // Regenerate session ID periodically (every 10 minutes)
        if (!isset($_SESSION['generated_at'])) {
            $_SESSION['generated_at'] = time();
        } else if (time() - $_SESSION['generated_at'] > 600) {
            session_regenerate_id(true);
            $_SESSION['generated_at'] = time();
        }
    }
}

/**
 * Generate CSRF token
 * @return string CSRF token
 */
function generateCSRFToken() {
    if (!isset($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = hash_hmac('sha256', session_id() . time(), CSRF_SECRET);
    }
    return $_SESSION['csrf_token'];
}

/**
 * Validate CSRF token
 * @param string $token Token to validate
 * @return bool True if valid
 */
function validateCSRFToken($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}
?> 