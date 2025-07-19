function createModal (content) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <h2>Task Details</h2>
      <p>${content}</p>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelector(".close-button").addEventListener("click", () => {
    modal.remove();
  });
}
