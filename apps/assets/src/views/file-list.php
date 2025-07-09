<!-- Navigation -->
<div class="nav-links" style="margin-bottom: 1.5rem; display: flex; gap: 0.5rem; justify-content: center;">
    <a href="hero-images.php" class="nav-btn">
        <svg width="16" height="16" fill="none" viewBox="0 0 20 20" style="margin-right: 0.5rem;">
            <path d="M4 3a2 2 0 00-2 2v1.586l.879.879A3 3 0 004.172 8H15a1 1 0 00.707-.293L17 6.414V5a2 2 0 00-2-2H4z" fill="currentColor"/>
            <path d="M3 9.414V15a2 2 0 002 2h10a2 2 0 002-2V9.414l-1.707 1.707A3 3 0 0013.172 12H4.828a3 3 0 00-2.121-.879L3 9.414z" fill="currentColor"/>
        </svg>
        Manage Floating Images
    </a>
</div>

<!-- Welcome Message -->
<div class="welcome-section" style="text-align: center; margin: 2rem 0;">
    <h2 style="margin-bottom: 1rem; color: #2563eb;">Welcome to IIIT Dharwad Assets Management</h2>
    <p style="color: #64748b; font-size: 1.1rem;">Click the button above to manage floating images for the homepage hero section.</p>
</div>

<!-- Hidden sections - keeping original structure for future reference -->
<div style="display: none;">
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
.nav-links .nav-btn.active,
.nav-links .nav-btn:focus {
    background: #111;
    color: #fff;
}
.nav-links .nav-btn:hover {
    background: #222;
    color: #fff;
}
</style>

</div> <!-- End of hidden section -->