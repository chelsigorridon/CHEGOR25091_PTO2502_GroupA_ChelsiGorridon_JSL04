/**
 * Opens the modal and populates it with task data.
 * 
 * @param {Object} task - The task object to display in the modal.
 * @param {string} task.title - The title of the task.
 * @param {string} task.description - The task description.
 * @param {string} task.status - The current status of the task (todo, doing, done).
 */

  export function openModal(task) {                                                      // Set modal title and description
  document.getElementById("modal-title").innerText = task.title;
  document.getElementById("modal-description").innerText = task.description;

// Set status dropdown to match task status

    const statusSelect = document.getElementById("modal-status");
    if (statusSelect) {
      statusSelect.value = task.status.toLowerCase();
    }

  }

    // Show the modal
  
  const modal = document.getElementById("task-modal");
  if (modal) {
    modal.style.display = "block";
  }
;