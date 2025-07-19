import { initialTasks } from "../Data/initialData.js"; 


console.log("Script is running");


const taskContainers = document.querySelectorAll(".card-column-main");

  initialTasks.forEach((task) => {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.innerHTML = `<strong>${task.title}</strong>`;

  taskContainers[0].appendChild(taskDiv);

  taskDiv.addEventListener("click", function (event) {
  openModal(task);          
     event.stopPropagation();
});

});




console.log("initialTasks", initialTasks);

