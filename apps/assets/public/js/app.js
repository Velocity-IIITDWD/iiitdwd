/**
 * Assets Management System - Frontend JavaScript
 */

// Application state
const App = {
  isAdmin: window.AssetsConfig?.isAdmin || false,
  csrfToken: window.AssetsConfig?.csrfToken || "",
  currentFilter: "all",
  fileItems: [],
};

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  App.fileItems = document.querySelectorAll(".file-item");
  initializeEventListeners();
});

// Utility functions
function showAlert(message, type = "success") {
  const alertContainer = document.getElementById("alertContainer");
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.innerHTML = `
        ${message}
        <button class="alert-close" onclick="this.parentElement.remove()">&times;</button>
    `;
  alertContainer.appendChild(alert);

  setTimeout(() => {
    if (alert.parentElement) {
      alert.remove();
    }
  }, 5000);
}

function setLoading(button, loading) {
  const text = button.querySelector('[id$="Text"]');

  if (loading) {
    button.disabled = true;
    if (text) text.innerHTML = '<span class="loading"></span> Loading...';
  } else {
    button.disabled = false;
  }
}

// Modal functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function openLoginModal() {
  openModal("loginModal");
}

function openRenameModal(filename, fileType) {
  const oldNameInput = document.getElementById("renameOldName");
  const fileTypeInput = document.getElementById("renameFileType");
  const newNameInput = document.getElementById("renameNewName");

  if (oldNameInput && fileTypeInput && newNameInput) {
    oldNameInput.value = filename;
    fileTypeInput.value = fileType;
    newNameInput.value = filename;
    openModal("renameModal");
    setTimeout(() => newNameInput.select(), 100);
  }
}

function openDeleteModal(filename, fileType) {
  const fileNameDisplay = document.getElementById("deleteFileName");
  const fileNameInput = document.getElementById("deleteFileNameInput");
  const fileTypeInput = document.getElementById("deleteFileType");

  if (fileNameDisplay && fileNameInput && fileTypeInput) {
    fileNameDisplay.textContent = filename;
    fileNameInput.value = filename;
    fileTypeInput.value = fileType;
    openModal("deleteModal");
  }
}

// Copy file link functionality
function copyFileLink(filename, fileType) {
  // Create relative path only (without domain)
  const relativePath =
    "/" + (fileType === "doc" ? "docs/" : "images/") + filename;

  // Find the button that was clicked
  const button = event.target;
  const originalText = button.textContent;

  // Try using the modern Clipboard API first
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(relativePath)
      .then(() => {
        showCopiedFeedback(button, originalText);
      })
      .catch(() => {
        fallbackCopyTextToClipboard(
          relativePath,
          filename,
          button,
          originalText
        );
      });
  } else {
    // Fallback for older browsers or non-secure contexts
    fallbackCopyTextToClipboard(relativePath, filename, button, originalText);
  }
}

// Show copied feedback by changing button text
function showCopiedFeedback(button, originalText) {
  button.textContent = "Copied!";
  button.disabled = true;

  // Reset button after 2 seconds
  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
  }, 2000);
}

// Fallback copy function for older browsers
function fallbackCopyTextToClipboard(text, filename, button, originalText) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    if (successful) {
      showCopiedFeedback(button, originalText);
    } else {
      showAlert("Failed to copy link. Please copy manually.", "error");
    }
  } catch (err) {
    showAlert("Failed to copy link. Please copy manually.", "error");
  }

  document.body.removeChild(textArea);
}

// File upload handling
function initializeFileUpload() {
  const fileUpload = document.getElementById("fileUpload");
  const fileInput = document.getElementById("fileInput");
  const uploadForm = document.getElementById("uploadForm");

  if (!fileUpload || !fileInput || !uploadForm) return;

  // Click to upload
  fileUpload.addEventListener("click", () => fileInput.click());

  // Drag and drop
  fileUpload.addEventListener("dragover", e => {
    e.preventDefault();
    fileUpload.classList.add("dragover");
  });

  fileUpload.addEventListener("dragleave", () => {
    fileUpload.classList.remove("dragover");
  });

  fileUpload.addEventListener("drop", e => {
    e.preventDefault();
    fileUpload.classList.remove("dragover");

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      fileInput.files = files;
      updateFileUploadDisplay();
    }
  });

  // File selection
  fileInput.addEventListener("change", updateFileUploadDisplay);

  // Upload form submission
  uploadForm.addEventListener("submit", handleFormSubmission);
}

function updateFileUploadDisplay() {
  const fileInput = document.getElementById("fileInput");
  const fileUpload = document.getElementById("fileUpload");
  const uploadText = fileUpload?.querySelector(".file-upload-text");

  if (!fileInput || !fileUpload || !uploadText) return;

  const file = fileInput.files[0];
  if (file) {
    fileUpload.classList.add("has-file");
    uploadText.innerHTML = `
            <strong>${file.name}</strong><br>
            <small>${(file.size / 1024 / 1024).toFixed(2)} MB</small>
        `;
  } else {
    fileUpload.classList.remove("has-file");
    uploadText.innerHTML = `
            <strong>Click to upload</strong> or drag and drop<br>
            <small>Max file size varies</small>
        `;
  }
}

// Form submission handler
async function handleFormSubmission(e) {
  e.preventDefault();

  const submitBtn = e.target.querySelector('button[type="submit"]');
  setLoading(submitBtn, true);

  try {
    const formData = new FormData(e.target);
    const response = await fetch("", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      showAlert(data.message, "success");
      setTimeout(() => location.reload(), 1000);
    } else {
      showAlert(data.message, "error");
      setLoading(submitBtn, false);
    }
  } catch (error) {
    showAlert("Operation failed. Please try again.", "error");
    setLoading(submitBtn, false);
  }
}

// Search and filter functionality
function initializeSearchAndFilter() {
  const searchInput = document.getElementById("searchInput");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase().trim();
      filterFiles(query, App.currentFilter);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      filterBtns.forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      App.currentFilter = this.dataset.filter;
      const query = searchInput?.value.toLowerCase().trim() || "";
      filterFiles(query, App.currentFilter);
    });
  });
}

function filterFiles(searchQuery, filterType) {
  const fileList = document.getElementById("fileList");
  let visibleCount = 0;

  App.fileItems.forEach(item => {
    const fileName = item.dataset.name;
    const fileType = item.dataset.type;
    const fileExt = item.dataset.ext;

    const matchesSearch = !searchQuery || fileName.includes(searchQuery);
    const matchesFilter =
      filterType === "all" || fileType === filterType || fileExt === filterType;

    if (matchesSearch && matchesFilter) {
      item.style.display = "flex";
      visibleCount++;
    } else {
      item.style.display = "none";
    }
  });

  // Show/hide empty state
  if (fileList) {
    let emptyState = fileList.querySelector(".empty-state");
    if (visibleCount === 0 && App.fileItems.length > 0) {
      if (!emptyState) {
        emptyState = document.createElement("div");
        emptyState.className = "empty-state";
        emptyState.innerHTML = "<p>No files match your search</p>";
        fileList.appendChild(emptyState);
      }
    } else if (emptyState && visibleCount > 0) {
      emptyState.remove();
    }
  }
}

// Keyboard shortcuts
function initializeKeyboardShortcuts() {
  document.addEventListener("keydown", function (e) {
    const searchInput = document.getElementById("searchInput");

    if (e.key === "/" && e.target !== searchInput && searchInput) {
      e.preventDefault();
      searchInput.focus();
    }

    if (e.key === "Escape") {
      if (searchInput) {
        searchInput.value = "";
        searchInput.blur();
        filterFiles("", App.currentFilter);
      }

      // Close any open modals
      document.querySelectorAll(".modal-overlay.active").forEach(modal => {
        closeModal(modal.id);
      });
    }
  });
}

// Modal event handlers
function initializeModalHandlers() {
  // Close modals on outside click
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", e => {
      if (e.target === overlay) {
        closeModal(overlay.id);
      }
    });
  });

  // Form submissions for admin operations
  const renameForm = document.getElementById("renameForm");
  const deleteForm = document.getElementById("deleteForm");

  if (renameForm) {
    renameForm.addEventListener("submit", handleFormSubmission);
  }

  if (deleteForm) {
    deleteForm.addEventListener("submit", handleFormSubmission);
  }
}

// Initialize all event listeners
function initializeEventListeners() {
  initializeSearchAndFilter();
  initializeKeyboardShortcuts();
  initializeModalHandlers();

  if (App.isAdmin) {
    initializeFileUpload();
  }
}

// Make functions globally available for inline event handlers
window.openLoginModal = openLoginModal;
window.openRenameModal = openRenameModal;
window.openDeleteModal = openDeleteModal;
window.closeModal = closeModal;
window.copyFileLink = copyFileLink;
