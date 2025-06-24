# IIITDWD Assets Management System

A production-ready, secure file management system for hosting static assets with authentication-protected administration features.

## Features

### Public Features

- **Browse Files**: View all documents and images with modern card-based layout
- **Search & Filter**: Real-time search and category filtering
- **Download**: Direct file access via clean URLs
- **Responsive Design**: Mobile-first design that works on all device sizes
- **Keyboard Shortcuts**: Press `/` to search, `Esc` to clear

### Admin Features (Authentication Required)

- **Drag & Drop Upload**: Modern file upload with drag-and-drop support
- **Modal-based UI**: Clean modal dialogs for all admin actions
- **Rename Files**: In-place file renaming with custom modal
- **Delete Files**: Secure file deletion with confirmation modal
- **File Type Validation**: Automatic validation of allowed file types
- **Visual Feedback**: Loading states and success/error notifications

## Security Features

- **Session-based Authentication**: Secure login system
- **CSRF Protection**: All state-changing operations protected
- **File Type Validation**: Whitelist-based file type checking
- **Path Traversal Protection**: Prevents directory traversal attacks
- **File Size Limits**: Configurable upload size limits
- **Input Sanitization**: All user inputs properly sanitized

## Production-Ready Architecture

### File Structure

```
apps/assets/
├── index.php              # Main application entry point
├── .htaccess              # Security and routing configuration
├── .env                   # Environment configuration (not in repo)
├── setup.php              # Initial setup script
├── config/
│   └── app.php           # Application configuration
├── src/
│   ├── controllers/
│   │   └── ApiController.php     # API request handler
│   ├── models/
│   │   ├── Auth.php             # Authentication model
│   │   └── FileManager.php      # File operations model
│   ├── utils/
│   │   ├── env.php              # Environment loader
│   │   ├── helpers.php          # Helper functions
│   │   └── security.php         # Security utilities
│   └── views/
│       ├── layout.php           # Main HTML layout
│       ├── file-list.php        # File listing partial
│       └── modals.php           # Modal dialogs
├── public/
│   ├── css/
│   │   └── app.css              # Compiled styles
│   └── js/
│       └── app.js               # Frontend JavaScript
├── docs/                        # Document uploads
├── images/                      # Image uploads
└── README.md                    # This file
```

### Key Improvements

- **Separation of Concerns**: Models, Views, Controllers properly separated
- **Security**: Configuration and source files protected by .htaccess
- **Scalability**: Modular architecture for easy extension
- **Maintainability**: Clean code organization and documentation

## Supported File Types

### Documents

- PDF (.pdf)
- Text files (.txt)
- Word documents (.doc, .docx)
- Excel spreadsheets (.xls, .xlsx)
- PowerPoint presentations (.ppt, .pptx)

### Images

- JPEG (.jpg, .jpeg)
- PNG (.png)
- GIF (.gif)
- WebP (.webp)
- SVG (.svg)

## Quick Setup

### 1. Run Setup Script

```bash
php setup.php
```

This interactive script will:

- Generate secure admin credentials
- Create environment configuration
- Set up directories with proper permissions
- Generate CSRF secrets

### 2. Manual Setup (Alternative)

1. Copy `.env.example` to `.env` (if available)
2. Configure your admin credentials:
   - `ADMIN_USERNAME` - Admin username
   - `ADMIN_PASSWORD_HASH` - Use `password_hash('your_password', PASSWORD_DEFAULT)`
   - Or use `ADMIN_PASSWORD` - Plain text password (will be hashed automatically)

All other settings use secure defaults and don't need to be configured.

### Configuration Options

The system uses secure defaults for all settings. You only need to configure admin credentials in `.env`.

Optional environment variables (if you want to override defaults):

- **Max file size**: `MAX_FILE_SIZE` (bytes, default: 100MB)
- **Session timeout**: `SESSION_TIMEOUT` (seconds, default: 1 hour)
- **App settings**: `APP_NAME`, `APP_URL`, `DEBUG`
- **Security**: `CSRF_SECRET` (auto-generated if not provided)

## Usage

### Public Access

- Visit the main page to browse files
- Use search to find specific files
- Filter by file type using the buttons
- Click any file to download

### Admin Access

1. Click "Admin" button in top-right corner
2. Login with admin credentials
3. Upload new files using the upload form
4. Use "Rename" and "Delete" buttons on each file

### Keyboard Shortcuts

- **/** - Focus search box
- **Escape** - Clear search and blur input

## Deployment

### GoDaddy cPanel / Shared Hosting

1. Upload all files to your domain/subdomain directory
2. Run setup script via terminal (if available) or manually create `.env`:
   ```bash
   php setup.php
   ```
3. Ensure proper file permissions:
   - `.env` file: 600 (read/write owner only)
   - `docs/` and `images/` directories: 755 (writable)
4. Test upload functionality
5. Access your site and login with configured credentials

### Security Checklist

- ✅ Run setup script to generate secure credentials
- ✅ Verify `.env` file is not publicly accessible
- ✅ Check directory permissions are correct
- ✅ Test file upload and admin functions
- ✅ Ensure HTTPS is enabled (check `.htaccess`)
- ✅ Verify `src/` and `config/` directories are protected

## Security Considerations

- Change default admin credentials immediately
- Regularly review uploaded files
- Monitor for unusual activity
- Keep PHP version updated
- Use HTTPS in production
- Never commit `.env` files to version control

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## PHP Requirements

- PHP 8.0 or higher (uses match expressions)
- File upload support enabled
- Session support enabled

---

**Note**: This system is designed for production hosting and requires no external dependencies or databases.
