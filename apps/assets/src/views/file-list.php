<!-- Navigation -->
<div class="nav-links" style="margin-bottom: 1.5rem; display: flex; gap: 0.5rem; justify-content: center;">
    <a href="hero-images.php" class="nav-btn nav-btn-explore">Explore Floating Images</a>
</div>

<?php if ($isAdmin): ?>
    <!-- Upload Section -->
    <div class="upload-section">
        <form class="upload-form" id="uploadForm">
            <input type="hidden" name="operation" value="upload">
            <input type="hidden" name="csrf_token" value="<?= $csrfToken ?>">
            
            <div>
                <label class="form-label">Upload File</label>
                <div class="file-upload" id="fileUpload">
                    <div class="file-upload-text">
                        <strong>Click to upload</strong> or drag and drop<br>
                        <small>Max <?= formatFileSize(MAX_FILE_SIZE) ?></small>
                    </div>
                    <input type="file" name="file" class="file-upload-input" id="fileInput" required>
                </div>
            </div>
            
            <div>
                <label class="form-label">Type</label>
                <div class="select-wrapper">
                    <select name="target_type" class="form-select" required>
                        <option value="" disabled selected>Select file type...</option>
                        <option value="docs">Documents</option>
                        <option value="images">Images</option>
                    </select>
                    <span class="select-chevron">
                        <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                            <path d="M6 8l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
            </div>
            
            <button type="submit" class="btn btn-primary">
                <span id="uploadText">Upload</span>
            </button>
        </form>
    </div>
<?php endif; ?>

<!-- Search and Filters -->
<div class="search-section">
    <div class="search-container">
        <input type="text" class="search-input" id="searchInput" 
               placeholder="Search files..." autocomplete="off">
    </div>
    
    <div class="controls-row">
        <div class="filters">
            <button class="filter-btn active" data-filter="all">All Files</button>
            <button class="filter-btn" data-filter="doc">Documents</button>
            <button class="filter-btn" data-filter="img">Images</button>
        </div>
        
        <div class="sort-controls">
            <span class="sort-label">Sort by:</span>
            <button class="sort-btn active" data-sort="mtime">Last Updated</button>
            <button class="sort-btn" data-sort="name">Name</button>
        </div>
    </div>
</div>

<!-- Stats -->
<div class="stats">
    <span><?= count($docs) ?> documents</span>
    <span>•</span>
    <span><?= count($images) ?> images</span>
    <span>•</span>
    <span><?= count($allFiles) ?> total files</span>
</div>

<!-- File List -->
<div class="file-list" id="fileList">
    <?php if (empty($allFiles)): ?>
        <div class="empty-state">
            <p>No files found</p>
        </div>
    <?php else: ?>
        <?php foreach ($allFiles as $file): ?>
            <div class="file-item" 
                 data-name="<?= strtolower($file['name']) ?>" 
                 data-type="<?= $file['type'] ?>"
                 data-ext="<?= $file['ext'] ?>"
                 data-mtime="<?= $file['mtime'] ?>"
                 data-original-name="<?= $file['name'] ?>">
                <div class="file-icon">
                    <?= strtoupper($file['ext']) ?>
                </div>
                <div class="file-info">
                    <a href="<?= ($file['type'] === 'doc' ? 'docs/' : 'images/') . $file['name'] ?>" 
                       class="file-name" target="_blank"><?= $file['name'] ?></a>
                    <div class="file-meta">
                        <?= formatFileSize($file['size']) ?> • <?= date('M j, Y', $file['mtime']) ?>
                    </div>
                </div>
                
                <div class="file-actions">
                    <button class="btn btn-secondary btn-sm" 
                            onclick="copyFileLink('<?= addslashes($file['name']) ?>', '<?= $file['type'] ?>')">
                        Copy Link
                    </button>
                    
                    <?php if ($isAdmin): ?>
                        <button class="btn btn-secondary btn-sm" 
                                onclick="openRenameModal('<?= addslashes($file['name']) ?>', '<?= $file['type'] ?>')">
                            Rename
                        </button>
                        <button class="btn btn-secondary btn-sm" 
                                onclick="openDeleteModal('<?= addslashes($file['name']) ?>', '<?= $file['type'] ?>')">
                            Delete
                        </button>
                    <?php endif; ?>
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
.nav-links .nav-btn.nav-btn-explore {
    border: 1px solid #e5e7eb;
    background: white;
}
.nav-links .nav-btn.active,
.nav-links .nav-btn:focus {
    background: #111;
    color: #fff;
}
.nav-links .nav-btn:hover {
    background: #111;
    color: #fff;
}

/* Controls Row Layout */
.controls-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

/* Sort Controls */
.sort-controls {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.sort-label {
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: 500;
}

.sort-btn {
    background: none;
    border: 1px solid #e5e7eb;
    color: #374151;
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    border-radius: 0.375rem;
    transition: all 0.15s ease;
}

.sort-btn:hover {
    background: #f3f4f6;
    border-color: #d1d5db;
}

.sort-btn.active {
    background: #111;
    color: #fff;
    border-color: #111;
}

@media (max-width: 640px) {
    .controls-row {
        flex-direction: column;
        align-items: stretch;
    }
    
    .sort-controls {
        justify-content: center;
    }
}
</style>