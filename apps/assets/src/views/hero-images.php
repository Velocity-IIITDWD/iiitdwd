<?php
// Start of PHP code
?>

<!-- Navigation -->
<div class="nav-links" style="margin-bottom: 1.5rem; display: flex; gap: 0.5rem; justify-content: space-between; align-items: center;">
    <a href="index.php" class="nav-btn" style="display: flex; align-items: center;">
        <svg width="16" height="16" fill="none" viewBox="0 0 20 20" style="margin-right: 0.5rem;">
            <path d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" fill="currentColor"/>
        </svg>
        Back
    </a>
    <h2 style="margin: 0; color:rgb(6, 7, 8); font-weight: 400;">Manage Floating Images</h2>
    <div style="width: 60px;"></div> <!-- Spacer for centering -->
</div>

<?php if ($isAdmin): ?>
    <!-- Upload Section -->
    <div class="upload-section">
        <form class="upload-form" id="heroUploadForm">
            <input type="hidden" name="operation" value="floatingImagesBulkUpload">
            <input type="hidden" name="csrf_token" value="<?= htmlspecialchars($csrfToken) ?>">
            
            <div>
                <label class="form-label">Upload floating Images</label>
                <div class="file-upload" id="heroFileUpload">
                    <div class="file-upload-text">
                        <strong>Click to upload</strong> or drag and drop<br>
                        <small>JPG, PNG, GIF, WebP, SVG • Max <?= formatFileSize(MAX_FILE_SIZE) ?></small>
                    </div>
                    <input type="file" name="files[]" class="file-upload-input" id="heroFileInput" multiple accept="image/*">
                </div>
                <div class="upload-progress" id="heroUploadProgress">
                    <div class="upload-progress-fill" id="heroUploadProgressFill"></div>
                </div>
            </div>
            
            <button type="submit" class="btn btn-primary">
                <span id="heroUploadText">Upload Images</span>
            </button>
        </form>
    </div>

    <!-- Bulk Actions Section -->
    <div class="bulk-actions" id="bulkActions" style="display: none;">
        <div class="bulk-actions-info">
            <span id="selectedCount">0</span> images selected
        </div>
        <div class="bulk-actions-buttons">
            <button type="button" class="btn btn-secondary btn-sm" onclick="selectAllHeroImages()">Select All</button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="deselectAllHeroImages()">Deselect All</button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="deleteSelectedHeroImages()">Delete Selected</button>
        </div>
    </div>
<?php endif; ?>

<!-- Search and Filters -->
<div class="search-section">
    <div class="search-container">
        <input type="text" class="search-input" id="heroSearchInput" 
               placeholder="Search Floating images..." autocomplete="off">
    </div>
    
    <div class="filters">
        <button class="filter-btn active" data-filter="all"> All Images</button>
        <button class="filter-btn" data-filter="jpg"> JPG</button>
        <button class="filter-btn" data-filter="png"> PNG</button>
        <button class="filter-btn" data-filter="gif"> GIF</button>
        <button class="filter-btn" data-filter="webp"> WebP</button>
        <button class="filter-btn" data-filter="svg"> SVG</button>
    </div>
</div>

<!-- Stats -->
<div class="stats">
    <span><?= count($floatingImages) ?> Floating images</span>
    <span>•</span>
    <span><?= array_sum(array_column($floatingImages, 'size')) > 0 ? formatFileSize(array_sum(array_column($floatingImages, 'size'))) : '0 B' ?> total size</span>
</div>

<!-- Floating  Images Gallery -->
<div class="gallery-grid" id="heroImagesGallery">
    <?php if (empty($floatingImages)): ?>
        <div class="empty-state">
            <div class="empty-state-icon"></div>
            <h3>No Floating images found</h3>
            <p>Upload some beautiful images to create an amazing Floating section for your website.</p>
            <?php if ($isAdmin): ?>
            <button class="btn btn-primary" onclick="document.getElementById('heroFileInput').click()">
                Upload Your First Images
            </button>
            <?php endif; ?>
        </div>
    <?php else: ?>
        <?php foreach ($floatingImages as $image): ?>
        <div class="image-card hero-image-card" 
             data-name="<?= strtolower($image['filename']) ?>" 
             data-ext="<?= strtolower(pathinfo($image['filename'], PATHINFO_EXTENSION)) ?>"
             data-filename="<?= htmlspecialchars($image['filename']) ?>">
            
            <?php if ($isAdmin): ?>
            <input type="checkbox" class="image-checkbox" onchange="updateHeroSelection()">
            <?php endif; ?>
            
            <div class="image-container">
                <a href="<?= htmlspecialchars($image['url']) ?>" 
                   target="_blank" 
                   rel="noopener noreferrer">
                    <img src="<?= htmlspecialchars($image['url']) ?>" 
                         alt="<?= htmlspecialchars($image['filename']) ?>" 
                         class="image-preview"
                         loading="lazy"
                         onerror="this.parentElement.innerHTML='<div class=\'image-loading\'>Failed to load image</div>'">
                </a>
                <div class="image-overlay"></div>
            </div>
            
            <div class="image-info">
                <div class="image-name"><?= htmlspecialchars($image['filename']) ?></div>
                <div class="image-meta">
                    <span class="image-size"><?= formatFileSize($image['size']) ?></span>
                    <span class="image-date"><?= date('M j, Y', $image['upload_time']) ?></span>
                </div>
                
                <div class="image-actions">
                    <button class="btn btn-secondary btn-sm" 
                            onclick="copyHeroImageLink('<?= addslashes($image['filename']) ?>')"
                            title="Copy image URL">
                        Copy Link
                    </button>
                    
                    <?php if ($isAdmin): ?>
                    <button class="btn btn-secondary btn-sm" 
                            onclick="openRenameModal('<?= addslashes($image['filename']) ?>', 'floating-img')"
                            title="Rename image">
                        Rename
                    </button>
                    <button class="btn btn-secondary btn-sm" 
                            onclick="openDeleteModal('<?= addslashes($image['filename']) ?>', 'floating-img')"
                            title="Delete image">
                        Delete
                    </button>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <?php endforeach; ?>
    <?php endif; ?>
</div>

<style>
/* Navigation Buttons - Black & White, No Borders */
.nav-links .nav-btn {
    background: none;
    color: #111;
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 1.25rem;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.15s, color 0.15s;
    border-radius: 0;
    box-shadow: none;
    letter-spacing: 0.01em;
}
.nav-links .nav-btn.active,
.nav-links .nav-btn:focus {
    background: #111;
    color: #fff;
}
.nav-links .nav-btn:hover {
    background: #222;
    color: #fff;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
}

.image-card {
    background: white;
    border: 1px solid var(--gray-200);
    overflow: hidden;
    transition: background-color 0.2s ease;
    position: relative;
}

.image-card:hover {
    background: var(--gray-50);
}

.image-card.selected {
    background: var(--primary-light);
    border-color: var(--primary);
}

.image-container {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    background: var(--gray-50);
    border-bottom: 1px solid var(--gray-200);
}

.image-preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: opacity 0.2s ease;
}

.image-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: var(--gray-50);
    color: var(--gray-500);
    font-size: 0.875rem;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    opacity: 0;
    transition: opacity 0.2s ease;
}

.image-card:hover .image-overlay {
    opacity: 1;
}

.image-checkbox {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    z-index: 2;
    accent-color: var(--primary);
}

.image-info {
    padding: 1rem;
}

.image-name {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--gray-900);
    margin-bottom: 0.5rem;
    word-break: break-word;
    line-height: 1.4;
}

.image-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
    color: var(--gray-500);
    margin-bottom: 0.75rem;
}

.image-actions {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.upload-section {
    background: white;
    border: 1px solid var(--gray-200);
    padding: 1.5rem;
    margin-bottom: 2rem;
}

.upload-form {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    align-items: end;
}

.file-upload {
    border: 2px dashed var(--gray-300);
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.2s ease;
    background: var(--gray-50);
}

.file-upload:hover,
.file-upload.dragover {
    border-color: var(--primary);
}

.file-upload-text {
    color: var(--gray-600);
    font-size: 0.875rem;
}

.file-upload-input {
    display: none;
}

.search-section {
    background: white;
    border: 1px solid var(--gray-200);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
}

.search-container {
    margin-bottom: 1rem;
}

.search-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--gray-300);
    font-size: 0.875rem;
    background: white;
    transition: border-color 0.2s ease;
}

.search-input:focus {
    outline: none;
    border-color: var(--primary);
}

.filters {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 0.5rem 1rem;
    border: 1px solid var(--gray-300);
    background: white;
    font-size: 0.75rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    color: var(--gray-600);
}

.filter-btn:hover {
    background: var(--gray-100);
}

.filter-btn.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
}

.stats {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.875rem;
    color: var(--gray-500);
}

.empty-state {
    text-align: center;
    padding: 3rem 1rem;
    color: var(--gray-500);
    grid-column: 1 / -1;
    background: white;
    border: 1px solid var(--gray-200);
}

.empty-state-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    opacity: 0.5;
}

.empty-state h3 {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
    color: var(--gray-700);
}

.empty-state p {
    font-size: 0.875rem;
    margin-bottom: 1rem;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
}

.bulk-actions {
    background: white;
    border: 1px solid var(--gray-200);
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    color: var(--gray-500);
}

.bulk-actions-info {
    color: var(--gray-700);
    font-weight: 500;
}

.bulk-actions-buttons {
    display: flex;
    gap: 0.5rem;
}

.upload-progress {
    height: 4px;
    background: var(--gray-200);
    overflow: hidden;
    margin-top: 0.5rem;
    display: none;
}

.upload-progress-fill {
    height: 100%;
    background: var(--primary);
    transition: width 0.3s ease;
}

.nav-links {
    margin-bottom: 1.25rem;
}

.nav-links a {
    color: var(--gray-600);
    text-decoration: none;
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    background: white;
    border: 1px solid var(--gray-300);
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
}

.nav-links a:hover {
    background: var(--gray-100);
}

.nav-links a.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    
    .upload-form {
        grid-template-columns: 1fr;
    }
    
    .bulk-actions {
        flex-direction: column;
        gap: 0.75rem;
        text-align: center;
    }
    
    .bulk-actions-buttons {
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .filters {
        justify-content: center;
    }
    
    .nav-links {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .nav-links a {
        margin-right: 0;
    }
}

@media (max-width: 480px) {
    .gallery-grid {
        grid-template-columns: 1fr;
    }
    
    .image-container {
        height: 180px;
    }
    
    .stats {
        flex-direction: column;
        gap: 0.25rem;
    }
}
</style>

<script>
// Floating Images Management JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeHeroImages();
    initializeSearch();
    initializeFilters();
});

function initializeHeroImages() {
    const uploadForm = document.getElementById('heroUploadForm');
    const fileInput = document.getElementById('heroFileInput');
    const fileUpload = document.getElementById('heroFileUpload');
    const uploadProgress = document.getElementById('heroUploadProgress');
    const uploadProgressFill = document.getElementById('heroUploadProgressFill');
    
    if (uploadForm && fileInput && fileUpload) {
        // Form submission
        uploadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const files = fileInput.files;
            if (files.length === 0) {
                showAlert('Please select at least one image', 'error');
                return;
            }
            handleHeroImageUpload(files);
        });
        
        // File input change
        fileInput.addEventListener('change', function(e) {
            const files = e.target.files;
            if (files.length > 0) {
                // Update upload text to show file count
                const uploadText = document.getElementById('heroUploadText');
                if (uploadText) {
                    uploadText.textContent = `Upload ${files.length} image${files.length > 1 ? 's' : ''}`;
                }
            }
        });
        
        // Drag and drop functionality
        fileUpload.addEventListener('dragover', handleDragOver);
        fileUpload.addEventListener('dragleave', handleDragLeave);
        fileUpload.addEventListener('drop', handleDrop);
        fileUpload.addEventListener('click', function() {
            fileInput.click();
        });
    }
}

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
}

function handleDragLeave(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        // Filter only image files
        const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
        if (imageFiles.length > 0) {
            document.getElementById('heroFileInput').files = createFileList(imageFiles);
            handleHeroImageUpload(imageFiles);
        } else {
            showAlert('Please drop only image files', 'error');
        }
    }
}

function createFileList(files) {
    const dt = new DataTransfer();
    files.forEach(file => dt.items.add(file));
    return dt.files;
}

function handleHeroImageUpload(files) {
    const formData = new FormData();
    formData.append('operation', 'floatingImagesBulkUpload');
    formData.append('csrf_token', window.AssetsConfig.csrfToken);
    
    // Add all files
    for (let i = 0; i < files.length; i++) {
        formData.append('files[]', files[i]);
    }
    
    // Show progress
    const uploadProgress = document.getElementById('heroUploadProgress');
    const uploadProgressFill = document.getElementById('heroUploadProgressFill');
    const uploadText = document.getElementById('heroUploadText');
    
    if (uploadProgress && uploadProgressFill) {
        uploadProgress.style.display = 'block';
        uploadProgressFill.style.width = '0%';
    }
    
    if (uploadText) {
        uploadText.textContent = 'Uploading...';
    }
    
    // Upload files
    fetch('', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (uploadProgress && uploadProgressFill) {
            uploadProgressFill.style.width = '100%';
            setTimeout(() => {
                uploadProgress.style.display = 'none';
            }, 1000);
        }
        
        if (uploadText) {
            uploadText.textContent = 'Upload Images';
        }
        
        if (data.success) {
            showAlert(data.message, 'success');
            setTimeout(() => location.reload(), 1500);
        } else {
            showAlert(data.message, 'error');
        }
        
        if (data.errors && data.errors.length > 0) {
            data.errors.forEach(error => {
                showAlert(error, 'error');
            });
        }
        
        // Reset form
        document.getElementById('heroUploadForm').reset();
    })
    .catch(error => {
        console.error('Upload failed:', error);
        showAlert('Upload failed. Please try again.', 'error');
        
        if (uploadProgress) {
            uploadProgress.style.display = 'none';
        }
        
        if (uploadText) {
            uploadText.textContent = 'Upload Images';
        }
    });
}

function initializeSearch() {
    const searchInput = document.getElementById('heroSearchInput');
    const imageItems = document.querySelectorAll('.hero-image-card');
    
    if (searchInput && imageItems.length > 0) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            imageItems.forEach(item => {
                const filename = item.getAttribute('data-name');
                const visible = filename.includes(searchTerm);
                item.style.display = visible ? 'block' : 'none';
            });
            
            updateEmptyState();
        });
    }
}

function initializeFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const imageItems = document.querySelectorAll('.hero-image-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter items
            imageItems.forEach(item => {
                const ext = item.getAttribute('data-ext');
                const visible = filter === 'all' || ext === filter;
                item.style.display = visible ? 'block' : 'none';
            });
            
            updateEmptyState();
        });
    });
}

function updateEmptyState() {
    const imagesGallery = document.getElementById('heroImagesGallery');
    const visibleItems = document.querySelectorAll('.hero-image-card[style*="block"], .hero-image-card:not([style*="none"])');
    const emptyState = imagesGallery.querySelector('.empty-state');
    
    if (visibleItems.length === 0 && !emptyState) {
        const emptyDiv = document.createElement('div');
        emptyDiv.className = 'empty-state';
        emptyDiv.innerHTML = '<div class="empty-state-icon">🔍</div><h3>No images match your search</h3><p>Try adjusting your search terms or filters</p>';
        imagesGallery.appendChild(emptyDiv);
    } else if (visibleItems.length > 0 && emptyState) {
        emptyState.remove();
    }
}

function updateHeroSelection() {
    const checkboxes = document.querySelectorAll('.image-checkbox:checked');
    const bulkActions = document.getElementById('bulkActions');
    const selectedCount = document.getElementById('selectedCount');
    
    if (selectedCount) {
        selectedCount.textContent = checkboxes.length;
    }
    
    if (bulkActions) {
        bulkActions.style.display = checkboxes.length > 0 ? 'flex' : 'none';
    }
    
    // Update visual selection state
    document.querySelectorAll('.hero-image-card').forEach(card => {
        const checkbox = card.querySelector('.image-checkbox');
        if (checkbox && checkbox.checked) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });
}

function selectAllHeroImages() {
    const visibleCheckboxes = document.querySelectorAll('.hero-image-card:not([style*="none"]) .image-checkbox');
    visibleCheckboxes.forEach(checkbox => {
        checkbox.checked = true;
    });
    updateHeroSelection();
}

function deselectAllHeroImages() {
    document.querySelectorAll('.image-checkbox').forEach(checkbox => {
        checkbox.checked = false;
    });
    updateHeroSelection();
}

function deleteSelectedHeroImages() {
    const checkboxes = document.querySelectorAll('.image-checkbox:checked');
    const filenames = [];
    
    checkboxes.forEach(checkbox => {
        const card = checkbox.closest('.hero-image-card');
        const filename = card.getAttribute('data-filename');
        if (filename) {
            filenames.push(filename);
        }
    });
    
    if (filenames.length === 0) {
        showAlert('No images selected', 'error');
        return;
    }
    
    if (!confirm(`Are you sure you want to delete ${filenames.length} image${filenames.length > 1 ? 's' : ''}?`)) {
        return;
    }
    
    const formData = new FormData();
    formData.append('operation', 'floatingImagesBulkDelete');
    formData.append('csrf_token', window.AssetsConfig.csrfToken);
    filenames.forEach(filename => {
        formData.append('filenames[]', filename);
    });
    
    fetch('', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showAlert(data.message, 'success');
            setTimeout(() => location.reload(), 1500);
        } else {
            showAlert(data.message, 'error');
        }
        
        if (data.errors && data.errors.length > 0) {
            data.errors.forEach(error => {
                showAlert(error, 'error');
            });
        }
    })
    .catch(error => {
        console.error('Delete failed:', error);
        showAlert('Delete failed. Please try again.', 'error');
    });
}

function copyHeroImageLink(filename) {
    const baseUrl = window.location.origin + window.location.pathname.replace('/hero-images.php', '');
    const imageUrl = `${baseUrl}/floating_images/${filename}`;
    
    navigator.clipboard.writeText(imageUrl).then(() => {
        showAlert('Image URL copied to clipboard', 'success');
    }).catch(err => {
        console.error('Failed to copy: ', err);
        showAlert('Failed to copy URL', 'error');
    });
}

// Global functions for consistency with main app
window.updateHeroSelection = updateHeroSelection;
window.selectAllHeroImages = selectAllHeroImages;
window.deselectAllHeroImages = deselectAllHeroImages;
window.deleteSelectedHeroImages = deleteSelectedHeroImages;
window.copyHeroImageLink = copyHeroImageLink;
</script>
