document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from localStorage on page load
  loadTasks();

  // Add task when button is clicked
  addButton.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
          addTask(taskText);
          taskInput.value = ''; // clear input
      } else {
          alert('Please enter a task!');
      }
  });

  // Allow pressing "Enter" to add task
  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          const taskText = taskInput.value.trim();
          if (taskText !== '') {
              addTask(taskText);
              taskInput.value = '';
          } else {
              alert('Please enter a task!');
          }
      }
  });

  // Function to add a task to the DOM and localStorage
  function addTask(taskText, save = true) {
      const li = document.createElement('li');
      li.textContent = taskText;

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('remove-btn');
      removeBtn.onclick = () => {
          li.remove();
          removeFromStorage(taskText);
      };

      li.appendChild(removeBtn);
      taskList.appendChild(li);

      if (save) {
          saveToStorage(taskText);
      }
  }

  // Save a new task to localStorage
  function saveToStorage(taskText) {
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      tasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Remove a task from localStorage
  function removeFromStorage(taskText) {
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = tasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  // Load tasks from localStorage into the DOM
  function loadTasks() {
      const t
