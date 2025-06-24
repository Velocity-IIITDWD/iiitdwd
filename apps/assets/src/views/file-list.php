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
                    <select name="target_type" class="form-select">
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
    
    <div class="filters">
        <button class="filter-btn active" data-filter="all">All Files</button>
        <button class="filter-btn" data-filter="doc">Documents</button>
        <button class="filter-btn" data-filter="img">Images</button>
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
                 data-ext="<?= $file['ext'] ?>">
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
                
                <?php if ($isAdmin): ?>
                    <div class="file-actions">
                        <button class="btn btn-secondary btn-sm" 
                                onclick="openRenameModal('<?= addslashes($file['name']) ?>', '<?= $file['type'] ?>')">
                            Rename
                        </button>
                        <button class="btn btn-secondary btn-sm" 
                                onclick="openDeleteModal('<?= addslashes($file['name']) ?>', '<?= $file['type'] ?>')">
                            Delete
                        </button>
                    </div>
                <?php endif; ?>
            </div>
        <?php endforeach; ?>
    <?php endif; ?>
</div> 