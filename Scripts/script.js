import { initialTasks } from "../Data/initialData.js";     // Import the initial tasks array
import { openModal} from "../Scripts/zmodal.js";            // Import the openModal function from modal handling script

/**
 * Logs a message to confirm script execution.
 */

console.log("Script is running");  


/**
 * Loops through the list of tasks and dynamically creates task elements.
 * Each task is appended to its corresponding column based on its status.
 */


  initialTasks.forEach((task) => {
  const taskDiv = document.createElement("div");                   

   /**
   * Create a new div element for the task.
   * @type {HTMLDivElement}
   */

  taskDiv.className = "task-div";
  taskDiv.innerHTML = `<strong>${task.title}</strong>`;          // Insert task title into the div using innerHTML

  
  /**
   * Add a click event listener to each task div.
   * On click, it opens a modal with task details.
   */


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
    container.appendChild(taskDiv);     // Append the task div to the container if it exists
  }
});

/**
 * Log the full array of tasks for debugging purposes.
 */

console.log("initialTasks", initialTasks);

