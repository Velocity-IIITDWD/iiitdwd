<?php
/**
 * Assets Management System Setup Script
 * Run this script once to set up your environment with secure credentials
 */

echo "🛠️  IIIT Dharwad Assets Management System Setup\n";
echo "==========================================\n\n";

// Check if .env already exists
if (file_exists('.env')) {
    echo "⚠️  Warning: .env file already exists!\n";
    echo "Do you want to overwrite it? (y/N): ";
    $handle = fopen("php://stdin", "r");
    $confirm = trim(fgets($handle));
    fclose($handle);
    
    if (strtolower($confirm) !== 'y') {
        echo "Setup cancelled.\n";
        exit;
    }
}

echo "Setting up your environment...\n\n";

// Collect user inputs
echo "Admin Configuration:\n";
echo "Username (default: admin): ";
$handle = fopen("php://stdin", "r");
$username = trim(fgets($handle));
if (empty($username)) {
    $username = 'admin';
}

echo "Password: ";
$password = trim(fgets($handle));
if (empty($password)) {
    echo "❌ Password cannot be empty!\n";
    exit(1);
}

echo "Confirm password: ";
$confirmPassword = trim(fgets($handle));
if ($password !== $confirmPassword) {
    echo "❌ Passwords do not match!\n";
    exit(1);
}
fclose($handle);

// Generate secure values
$passwordHash = password_hash($password, PASSWORD_DEFAULT);

// Create .env file with minimal configuration
$envContent = "# Assets Management System Environment Variables
# Generated on " . date('Y-m-d H:i:s') . "

# Admin Credentials (Required)
ADMIN_USERNAME={$username}
ADMIN_PASSWORD_HASH=\"{$passwordHash}\"
";

if (file_put_contents('.env', $envContent)) {
    echo "\n✅ Environment file created successfully!\n";
    echo "\n📋 Setup Summary:\n";
    echo "- Username: {$username}\n";
    echo "- Password: [HIDDEN]\n";
    echo "- All other settings use secure defaults\n";
    
    echo "\n🔒 Security Notes:\n";
    echo "- Your password has been securely hashed\n";
    echo "- Never commit the .env file to version control\n";
    echo "- Change the default password after first login\n";
    echo "- Other settings (CSRF, file limits, etc.) use secure defaults\n";
    
    // Set proper permissions
    if (chmod('.env', 0600)) {
        echo "- File permissions set to 600 (owner read/write only)\n";
    }
    
    // Check directory permissions
    echo "\n📁 Directory Setup:\n";
    $docsDir = 'docs';
    $imagesDir = 'images';
    
    if (!is_dir($docsDir)) {
        if (mkdir($docsDir, 0755, true)) {
            echo "- Created docs directory\n";
        } else {
            echo "- ⚠️  Failed to create docs directory\n";
        }
    } else {
        echo "- docs directory exists\n";
    }
    
    if (!is_dir($imagesDir)) {
        if (mkdir($imagesDir, 0755, true)) {
            echo "- Created images directory\n";
        } else {
            echo "- ⚠️  Failed to create images directory\n";
        }
    } else {
        echo "- images directory exists\n";
    }
    
    // Check if directories are writable
    if (is_writable($docsDir)) {
        echo "- docs directory is writable ✅\n";
    } else {
        echo "- ⚠️  docs directory is not writable - please fix permissions\n";
    }
    
    if (is_writable($imagesDir)) {
        echo "- images directory is writable ✅\n";
    } else {
        echo "- ⚠️  images directory is not writable - please fix permissions\n";
    }
    
    echo "\n🎉 Setup complete! You can now use the assets management system.\n";
    echo "Visit your site and login with the credentials you just created.\n";
    
} else {
    echo "\n❌ Failed to create .env file!\n";
    echo "Please check file permissions and try again.\n";
    exit(1);
}
?> 