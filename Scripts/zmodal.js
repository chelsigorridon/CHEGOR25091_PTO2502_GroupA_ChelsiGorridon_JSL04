
  export function openModal(task) {  
  document.getElementById("modal-title").innerText = task.title;
  document.getElementById("modal-description").innerText = task.description;

    const statusSelect = document.getElementById("modal-status");
    if (statusSelect) {
      statusSelect.value = task.status.toLowerCase();
    }

  }

  
  const modal = document.getElementById("task-modal");
  if (modal) {
    modal.style.display = "block";
  };
;