<?php
/**
 * Authentication Model
 * Handles user authentication and session management
 */

class Auth {
    
    /**
     * Check if user is authenticated
     * @return bool True if authenticated
     */
    public static function isAuthenticated() {
        startSecureSession();
        return isset($_SESSION['admin_logged_in']) && 
               $_SESSION['admin_logged_in'] === true &&
               isset($_SESSION['login_time']) &&
               (time() - $_SESSION['login_time']) < SESSION_TIMEOUT;
    }
    
    /**
     * Authenticate user with credentials
     * @param string $username Username
     * @param string $password Password
     * @return bool True if authenticated
     */
    public static function authenticate($username, $password) {
        if ($username === ADMIN_USERNAME && password_verify($password, ADMIN_PASSWORD)) {
            startSecureSession();
            session_regenerate_id(true);
            $_SESSION['admin_logged_in'] = true;
            $_SESSION['login_time'] = time();
            return true;
        }
        return false;
    }
    
    /**
     * Logout user and destroy session
     */
    public static function logout() {
        startSecureSession();
        $_SESSION = array();
        
        if (ini_get("session.use_cookies")) {
            $params = session_get_cookie_params();
            setcookie(session_name(), '', time() - 42000,
                $params["path"], $params["domain"],
                $params["secure"], $params["httponly"]
            );
        }
        
        session_destroy();
    }
    
    /**
     * Handle authentication requests
     * @return string|null Error message if any
     */
    public static function handleAuthRequest() {
        startSecureSession();
        
        if (!isset($_POST['action'])) {
            return null;
        }
        
        switch ($_POST['action']) {
            case 'login':
                if (isset($_POST['username']) && isset($_POST['password'])) {
                    if (self::authenticate($_POST['username'], $_POST['password'])) {
                        header('Location: ' . $_SERVER['PHP_SELF']);
                        exit;
                    } else {
                        return 'Invalid credentials';
                    }
                }
                break;
                
            case 'logout':
                self::logout();
                header('Location: ' . $_SERVER['PHP_SELF']);
                exit;
        }
        
        return null;
    }
}
?> 