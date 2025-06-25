/**
 * Assets Management System - Frontend JavaScript
 */

// Application state
const App = {
  isAdmin: window.AssetsConfig?.isAdmin || false,
  csrfToken: window.AssetsConfig?.csrfToken || "",
  currentFilter: "all",
  fileItems: [],
  pendingUpload: null, // Store pending upload data for replacement confirmation
};

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  App.fileItems = document.querySelectorAll(".file-item");
  initializeEventListeners();

  // Check for newly uploaded file to highlight
  checkForHighlightFile();
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
  if (!button) return;

  const text = button.querySelector('[id$="Text"]');

  if (loading) {
    button.disabled = true;
    if (text) {
      // Store original text if not already stored
      if (!text.dataset.originalText) {
        text.dataset.originalText = text.textContent;
      }
      text.innerHTML = '<span class="loading"></span> Loading...';
    }
  } else {
    button.disabled = false;
    if (text) {
      // Restore original text or default
      const originalText = text.dataset.originalText || "Upload";
      text.innerHTML = originalText;
      delete text.dataset.originalText;
    }
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

function closeModal(modalId, clearPendingUpload = true) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";

    // Handle special cleanup for replace modal only if explicitly clearing
    if (modalId === "replaceModal" && App.pendingUpload && clearPendingUpload) {
      setLoading(App.pendingUpload.submitBtn, false);
      App.pendingUpload = null;
    }
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

function showReplaceModal(filename) {
  const fileNameDisplay = document.getElementById("replaceFileName");
  if (fileNameDisplay) {
    fileNameDisplay.textContent = filename;
    openModal("replaceModal");
  }
}

function confirmReplaceFile() {
  closeModal("replaceModal", false); // Don't clear pending upload
  proceedWithUpload(true);
}

function cancelReplaceFile() {
  closeModal("replaceModal");
  // Reset loading state and clear pending upload
  if (App.pendingUpload) {
    setLoading(App.pendingUpload.submitBtn, false);
    App.pendingUpload = null;
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
  const operation = e.target.querySelector('input[name="operation"]')?.value;

  // Special handling for upload operations
  if (operation === "upload") {
    await handleUploadSubmission(e.target, submitBtn);
    return;
  }

  // Handle other operations (rename, delete, etc.)
  setLoading(submitBtn, true);

  try {
    const formData = new FormData(e.target);
    const response = await fetch("", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      // Close any open modals first
      const activeModals = document.querySelectorAll(".modal-overlay.active");
      activeModals.forEach(modal => {
        closeModal(modal.id, false);
      });

      // Show success notification
      showAlert(data.message, "success");

      // Reload page after a delay to show the notification
      setTimeout(() => location.reload(), 1500);
    } else {
      showAlert(data.message, "error");
      setLoading(submitBtn, false);
    }
  } catch (error) {
    showAlert("Operation failed. Please try again.", "error");
    setLoading(submitBtn, false);
  }
}

// Handle upload submission with file existence check
async function handleUploadSubmission(form, submitBtn) {
  // Prevent multiple simultaneous uploads
  if (App.pendingUpload) {
    showAlert("An upload is already in progress. Please wait.", "error");
    return;
  }

  setLoading(submitBtn, true);

  try {
    const formData = new FormData(form);
    const fileInput = form.querySelector('input[type="file"]');
    const targetType = form.querySelector('select[name="target_type"]')?.value;

    if (!fileInput.files[0]) {
      showAlert("Please select a file to upload.", "error");
      setLoading(submitBtn, false);
      return;
    }

    if (!targetType) {
      showAlert("Please select a file type.", "error");
      setLoading(submitBtn, false);
      return;
    }

    // Store the upload data for potential replacement
    App.pendingUpload = {
      file: fileInput.files[0],
      targetType: targetType,
      form: form,
      submitBtn: submitBtn,
    };

    // Check if file already exists first
    const filename = fileInput.files[0].name;
    const checkData = new FormData();
    checkData.append("operation", "checkFileExists");
    checkData.append("csrf_token", App.csrfToken);
    checkData.append("filename", filename);
    checkData.append("target_type", targetType);

    const checkResponse = await fetch("", {
      method: "POST",
      body: checkData,
    });

    const checkResult = await checkResponse.json();

    if (!checkResult.success) {
      showAlert(checkResult.message, "error");
      setLoading(submitBtn, false);
      return;
    }

    // If file exists, show replacement confirmation
    if (checkResult.exists) {
      setLoading(submitBtn, false);
      showReplaceModal(checkResult.filename);
      return;
    }

    // File doesn't exist, proceed with normal upload
    await proceedWithUpload(false);
  } catch (error) {
    console.error("Upload submission error:", error);
    showAlert("Upload failed. Please try again.", "error");
    setLoading(submitBtn, false);
    App.pendingUpload = null;
  }
}

// Proceed with the actual upload
async function proceedWithUpload(replace = false) {
  if (!App.pendingUpload) {
    showAlert("No pending upload found.", "error");
    return;
  }

  const { file, targetType, form, submitBtn } = App.pendingUpload;
  setLoading(submitBtn, true);

  try {
    // Recreate FormData with the stored file data
    const formData = new FormData();
    formData.append("operation", "upload");
    formData.append("csrf_token", App.csrfToken);
    formData.append("file", file);
    formData.append("target_type", targetType);

    // Add replace flag if needed
    if (replace) {
      formData.append("replace_file", "true");
    }

    const response = await fetch("", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      // Auto-copy the relative URL if we have filename and targetType
      if (data.filename && data.targetType) {
        const relativePath =
          "/" +
          (data.targetType === "images" ? "images/" : "docs/") +
          data.filename;
        copyToClipboard(relativePath);
        showAlert(data.message, "success");

        // Store the filename and targetType for highlighting after reload
        sessionStorage.setItem(
          "highlightFile",
          JSON.stringify({
            filename: data.filename,
            targetType: data.targetType,
          })
        );
      } else {
        showAlert(data.message, "success");
      }

      setTimeout(() => location.reload(), 1000);
    } else {
      showAlert(data.message, "error");
      setLoading(submitBtn, false);
    }
  } catch (error) {
    console.error("Upload error:", error);
    showAlert("Upload failed. Please try again.", "error");
    setLoading(submitBtn, false);
  } finally {
    App.pendingUpload = null;
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
      const activeModals = document.querySelectorAll(".modal-overlay.active");

      if (activeModals.length > 0) {
        // Close any open modals (this should clear pending uploads since it's a cancellation)
        activeModals.forEach(modal => {
          closeModal(modal.id, true);
        });
      } else if (searchInput) {
        // Only clear search if no modals are open
        searchInput.value = "";
        searchInput.blur();
        filterFiles("", App.currentFilter);
      }
    }
  });
}

// Modal event handlers
function initializeModalHandlers() {
  // Close modals on outside click
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", e => {
      if (e.target === overlay) {
        closeModal(overlay.id, true); // Outside click should clear pending uploads
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
window.showReplaceModal = showReplaceModal;
window.confirmReplaceFile = confirmReplaceFile;
window.cancelReplaceFile = cancelReplaceFile;
window.closeModal = closeModal;
window.copyFileLink = copyFileLink;

// Utility function to copy text to clipboard (similar to existing copyFileLink but simpler)
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  } else {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
    } catch (err) {
      console.error("Fallback: Could not copy text: ", err);
    }

    document.body.removeChild(textArea);
  }
}

// Function to highlight and scroll to a specific file
function highlightAndScrollToFile(filename, targetType) {
  // Wait a moment for the page to fully load
  setTimeout(() => {
    const fileItems = document.querySelectorAll(".file-item");

    fileItems.forEach(item => {
      const itemName = item.dataset.name;
      const itemType = item.dataset.type;

      // Check if this is our target file (handle case insensitive matching)
      const filenameMatch =
        itemName === filename.toLowerCase() || itemName === filename;
      const typeMatch =
        (targetType === "images" && itemType === "img") ||
        (targetType === "docs" && itemType === "doc");

      if (filenameMatch && typeMatch) {
        // Add highlight class
        item.classList.add("highlight");

        // Add copied URL badge
        addCopiedUrlBadge(item);

        // Scroll to the file
        item.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        // Remove highlight after animation completes
        setTimeout(() => {
          item.classList.remove("highlight");
        }, 20000);

        console.log("Highlighted file:", filename, "type:", targetType);
        return;
      }
    });
  }, 500);
}

// Function to add a "URL Copied" badge to a file item
function addCopiedUrlBadge(fileItem) {
  // Check if badge already exists
  if (fileItem.querySelector(".url-copied-badge")) {
    return;
  }

  // Create the badge
  const badge = document.createElement("span");
  badge.className = "url-copied-badge";
  badge.textContent = "URL Copied";

  // Find the file-meta section and append the badge
  const fileMeta = fileItem.querySelector(".file-meta");
  if (fileMeta) {
    // Add a separator if there's already content
    if (fileMeta.textContent.trim()) {
      fileMeta.appendChild(document.createTextNode(" • "));
    }
    fileMeta.appendChild(badge);
  }

  // Remove the badge after 15 seconds
  setTimeout(() => {
    if (badge.parentElement) {
      // Remove the separator text node if it exists
      const prevNode = badge.previousSibling;
      if (
        prevNode &&
        prevNode.nodeType === Node.TEXT_NODE &&
        prevNode.textContent.includes("•")
      ) {
        prevNode.remove();
      }
      badge.remove();
    }
  }, 15000);
}

// Function to check for newly uploaded file from sessionStorage
function checkForHighlightFile() {
  const highlightData = sessionStorage.getItem("highlightFile");
  if (highlightData) {
    try {
      const { filename, targetType } = JSON.parse(highlightData);
      highlightAndScrollToFile(filename, targetType);
      // Clean up the session storage
      sessionStorage.removeItem("highlightFile");
    } catch (e) {
      console.error("Error parsing highlight file data:", e);
    }
  }
}

// Sort functionality
function changeSort() {
  const sortSelect = document.getElementById("sortSelect");
  const selectedSort = sortSelect.value;

  // Get current URL and parameters
  const url = new URL(window.location);
  url.searchParams.set("sort", selectedSort);

  // Redirect to the new URL
  window.location.href = url.toString();
}
