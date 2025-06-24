<!-- Login Modal -->
<div class="modal-overlay" id="loginModal">
    <div class="modal">
        <div class="modal-header">
            <h3 class="modal-title">Admin Login</h3>
            <button class="modal-close" onclick="closeModal('loginModal')">&times;</button>
        </div>
        <div class="modal-body">
            <form method="post">
                <input type="hidden" name="action" value="login">
                <div class="form-group">
                    <label class="form-label">Username</label>
                    <input type="text" name="username" class="form-input" placeholder="admin" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Password</label>
                    <input type="password" name="password" class="form-input" placeholder="admin123" required>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%;">
                    Login
                </button>
            </form>
        </div>
    </div>
</div>

<?php if ($isAdmin): ?>
    <!-- Rename Modal -->
    <div class="modal-overlay" id="renameModal">
        <div class="modal">
            <div class="modal-header">
                <h3 class="modal-title">Rename File</h3>
                <button class="modal-close" onclick="closeModal('renameModal')">&times;</button>
            </div>
            <div class="modal-body">
                <form id="renameForm">
                    <input type="hidden" name="operation" value="rename">
                    <input type="hidden" name="csrf_token" value="<?= $csrfToken ?>">
                    <input type="hidden" name="old_name" id="renameOldName">
                    <input type="hidden" name="file_type" id="renameFileType">
                    <div class="form-group">
                        <label class="form-label">New filename</label>
                        <input type="text" name="new_name" id="renameNewName" class="form-input" required>
                    </div>
                    <div style="display: flex; gap: 0.5rem;">
                        <button type="button" class="btn btn-secondary" style="flex: 1;" 
                                onclick="closeModal('renameModal')">Cancel</button>
                        <button type="submit" class="btn btn-primary" style="flex: 1;">
                            <span id="renameText">Rename</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Delete Modal -->
    <div class="modal-overlay" id="deleteModal">
        <div class="modal">
            <div class="modal-header">
                <h3 class="modal-title">Delete File</h3>
                <button class="modal-close" onclick="closeModal('deleteModal')">&times;</button>
            </div>
            <div class="modal-body">
                <p style="margin-bottom: 1.5rem; color: var(--gray-600);">
                    Are you sure you want to delete "<strong id="deleteFileName"></strong>"?<br>
                    <small style="color: var(--danger);">This action cannot be undone.</small>
                </p>
                <form id="deleteForm">
                    <input type="hidden" name="operation" value="delete">
                    <input type="hidden" name="csrf_token" value="<?= $csrfToken ?>">
                    <input type="hidden" name="filename" id="deleteFileNameInput">
                    <input type="hidden" name="file_type" id="deleteFileType">
                    <div style="display: flex; gap: 0.5rem;">
                        <button type="button" class="btn btn-secondary" style="flex: 1;" 
                                onclick="closeModal('deleteModal')">Cancel</button>
                        <button type="submit" class="btn btn-primary" style="flex: 1;">
                            <span id="deleteText">Delete</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
<?php endif; ?> 