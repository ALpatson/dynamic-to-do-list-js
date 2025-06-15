// Wait until the entire DOM is loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a task
  function addTask() {
    const taskText = taskInput.value.trim();

    // Check if input is not empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new <li> element
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a "Remove" button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Add event listener to remove the task
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to the <li> and <li> to the list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  // Add task on button click
  addButton.addEventListener("click", addTask);

  // Add task on Enter key press
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
