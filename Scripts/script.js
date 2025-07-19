import { initialTasks } from "../Data/initialData.js"; 


console.log("Script is running");

  initialTasks.forEach((task) => {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.innerHTML = `<strong>${task.title}</strong>`;

  
  taskDiv.addEventListener("click", function (event) {
    openModal(task); 
    event.stopPropagation();
  });

  console.log("Task clicked:", task);

  
  const status = task.status.toLowerCase(); 
  const container = document.querySelector(
    `.column-div[data-status="${status}"] .tasks-container`
  );

  if (container) {
    container.appendChild(taskDiv);
  }
});






console.log("initialTasks", initialTasks);

