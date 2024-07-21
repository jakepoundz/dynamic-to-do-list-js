// Event listener for page load
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when the page loads
    function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
  }

    // Add Task Function
    function addTask(taskText, save = true) {

      // Get and trim task text
      const taskText = taskInput.value.trim();
     // Check if task text is empty
      if (!taskText) {
        alert("Please enter a task.");
        return;
      }
      // Create list item and remove button
      const li = document.createElement('li');
      li.textContent = taskText;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn');
      removeButton.onclick = () => {
        taskList.removeChild(li);
      };

      // Append elements to the list
      li.appendChild(removeButton);
      taskList.appendChild(li);

      if (save) {
        saveTaskToLocalStorage(taskText);
    }

      // Clear input field
      taskInput.value = "";
    }

     // Save a task to Local Storage
     function saveTaskToLocalStorage(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }

  // Remove a task from Local Storage
  function removeTaskFromLocalStorage(taskText) {
      let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }

    // Event Listeners for adding a task on a button click
    addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    addTask(taskText);
    });
    
    // Event listeners for adding a task on pressing the Enter key
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const taskText = taskInput.value.trim();
        addTask(taskText);
      }
    });
    
    // Load existing tasks from Local Storage on page load
    loadTasks();
});