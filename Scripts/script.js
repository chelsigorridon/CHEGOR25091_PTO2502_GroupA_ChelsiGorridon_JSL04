import { initialTasks } from "../Data/initialData.js"; 


const taskContainer = document.querySelectorAll("task-container");

  taskContainer.forEach((task) => {
  const taskDiv = document.createElement("div");

  taskDiv.className = "task-div";
  taskDiv.innerHTML = `<strong>${task.title}</strong> - ${task.status}`;

  taskContainer[0].appendChild(taskDiv);
});

console.log("initialTasks", initialTasks);
