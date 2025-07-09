# IIITDWD Assets Management System

A production-ready, secure file management system for hosting static assets with authentication-protected administration features and dedicated hero image management.

## Features

### Public Features

- **Browse Files**: View all documents and images with modern card-based layout
- **Hero Images Gallery**: Dedicated gallery for hero images with modern UI
- **Search & Filter**: Real-time search and category filtering
- **Download**: Direct file access via clean URLs
- **Responsive Design**: Mobile-first design that works on all device sizes
- **Keyboard Shortcuts**: Press `/` to search, `Esc` to clear

### Admin Features (Authentication Required)

- **Drag & Drop Upload**: Modern file upload with drag-and-drop support
- **Modal-based UI**: Clean modal dialogs for all admin actions
- **Rename Files**: In-place file renaming with custom modal
- **Delete Files**: Secure file deletion with confirmation modal
- **Bulk Operations**: Select multiple files for bulk deletion
- **File Type Validation**: Automatic validation of allowed file types
- **Visual Feedback**: Loading states and success/error notifications

### Hero Images Management

- **Dedicated Gallery**: Separate interface for managing hero images
- **Image Previews**: Thumbnail previews with hover effects
- **Bulk Upload**: Multiple image upload with progress tracking
- **Bulk Operations**: Select and delete multiple images
- **Direct Links**: Images open in new tabs for easy access

## API Endpoints

### Hero Images API

Get all hero images with their direct URLs - works in both development and production environments.

**Endpoint:** `GET /apps/assets/api.php`

**Alternative:** `GET /apps/assets/?api=floating-images`

**Response Format:**

```json
{
  "success": true,
  "data": [
    {
      "url": "https://yourdomain.com/apps/assets/floating_images/image1.jpg",
      "filename": "image1.jpg",
      "upload_time": 1704067200
    },
    {
      "url": "https://yourdomain.com/apps/assets/floating_images/image2.png",
      "filename": "image2.png",
      "upload_time": 1704067300
    }
  ],
  "count": 2
}
```

**Usage Examples:**

**cURL (Development):**

```bash
curl -X GET "http://localhost/apps/assets/api.php"
```

**cURL (Production):**

```bash
curl -X GET "https://yourdomain.com/apps/assets/api.php"
```

**cURL with pretty JSON:**

```bash
curl -X GET "http://localhost/apps/assets/api.php" | jq '.'
```

**JavaScript:**

```javascript
fetch("/apps/assets/api.php")
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      data.data.forEach(image => {
        console.log(`Image: ${image.filename}, URL: ${image.url}`);
      });
    }
  });
```

PHP:

```php
$response = file_get_contents('https://yourdomain.com/apps/assets/floating-images');
$data = json_decode($response, true);

if ($data['success']) {
    console.log('Found', data.count, 'hero images');
    data.data.forEach(image => {
        console.log('Image:', image.filename, 'URL:', image.url);
    });
});
```

**PHP:**

```php
<?php
$response = file_get_contents('https://yourdomain.com/apps/assets/api.php');
$data = json_decode($response, true);

if ($data['success']) {
    foreach ($data['data'] as $image) {
        echo "Image: {$image['filename']}, URL: {$image['url']}\n";
    }
}
?>
```

**Python:**

```python
import requests

response = requests.get('https://yourdomain.com/apps/assets/api.php')
data = response.json()

if data['success']:
    for image in data['data']:
        print(f"Image: {image['filename']}, URL: {image['url']}")
```

## Quick Start

1. **Clone and Setup:**

   ```bash
   git clone <repository-url>
   cd apps/assets
   php setup.php
   ```

2. **Configure Environment:**

   - Copy `.env.example` to `.env`
   - Update database and authentication settings

3. **Test API Endpoint:**
   ```bash
   curl -X GET "http://localhost/apps/assets/api.php"
   ```

## Production Deployment

The API endpoint will automatically work in production. The URLs returned will be absolute URLs based on your domain:

**Development:** `http://localhost/apps/assets/floating_images/image.jpg`
**Production:** `https://yourdomain.com/apps/assets/floating_images/image.jpg`

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
├── api.php                # Hero images API endpoint
├── hero-images.php        # Hero images management interface
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
│   │   ├── FileManager.php      # File operations model
│   │   └── FloatingImagesManager.php  # Hero images model
│   ├── utils/
│   │   ├── env.php              # Environment utilities
│   │   ├── helpers.php          # Helper functions
│   │   └── security.php         # Security utilities
│   └── views/
│       ├── file-list.php        # File listing view
│       ├── hero-images.php      # Hero images view
│       ├── layout.php           # Layout template
│       └── modals.php           # Modal templates
├── public/
│   ├── css/
│   │   └── app.css              # Application styles
│   └── js/
│       └── app.js               # Application JavaScript
├── docs/                        # Documentation files
├── images/                      # Regular images directory
├── floating_images/             # Hero images directory
└── README.md                    # This file
```

│ ├── utils/
│ │ ├── env.php # Environment loader
│ │ ├── helpers.php # Helper functions
│ │ └── security.php # Security utilities
│ └── views/
│ ├── layout.php # Main HTML layout
│ ├── file-list.php # File listing partial
│ └── modals.php # Modal dialogs
├── public/
│ ├── css/
│ │ └── app.css # Compiled styles
│ └── js/
│ └── app.js # Frontend JavaScript
├── docs/ # Document uploads
├── images/ # Image uploads
└── README.md # This file

````

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
````

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
- Navigate to "Hero Images" tab for hero image gallery
- Use search to find specific files
- Filter by file type using the buttons
- Click any file to download or view in new tab

### Admin Access

1. Click "Admin" button in top-right corner
2. Login with admin credentials
3. Upload new files using the upload form
4. Use "Rename" and "Delete" buttons on each file
5. Use bulk operations to select and delete multiple files

### Hero Images Management

1. Navigate to "Hero Images" tab
2. Upload images using drag-and-drop or file picker
3. Images automatically appear in gallery with thumbnails
4. Click image filename to open in new tab
5. Use "Copy Link" to get direct image URL
6. Use bulk operations for multiple image management

### API Integration

Use the hero images API to fetch image data for your applications:

```javascript
// Fetch all hero images
fetch("/apps/assets/?api=floating-images")
  .then(response => response.json())
  .then(data => {
    console.log(`Found ${data.count} hero images`);
    data.data.forEach(image => {
      console.log(`${image.filename}: ${image.url}`);
    });
  });
```

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
   - `docs/`, `images/`, and `floating_images/` directories: 755 (writable)
4. Test upload functionality for both regular files and hero images
5. Access your site and login with configured credentials

### Production Deployment Checklist

- ✅ Run setup script to generate secure credentials
- ✅ Verify `.env` file is not publicly accessible
- ✅ Check directory permissions are correct
- ✅ Test file upload and admin functions
- ✅ Test hero images upload and API endpoint
- ✅ Ensure HTTPS is enabled (check `.htaccess`)
- ✅ Verify `src/` and `config/` directories are protected
- ✅ Test API endpoint functionality

### Testing API Endpoint

After deployment, test the hero images API:

```bash
# Test API endpoint
curl "https://yourdomain.com/apps/assets/?api=floating-images"

# Should return JSON with success: true and data array
```

## Security Considerations

- Change default admin credentials immediately
- Regularly review uploaded files
- Monitor for unusual activity
- Keep PHP version updated
- Use HTTPS in production
- Never commit `.env` files to version control
- API endpoints are public but read-only

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
