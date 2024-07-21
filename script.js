// Event listener for page load
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    // Add Task Function
    function addTask() {
      // Get and trim task text
      const taskText = taskInput.value.trim();
      // Check if task text is empty
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
      // Create list item and remove button
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn');
      // Add remove button functionality
      removeButton.onclick = () => {
        taskList.removeChild(taskItem);
      };
      // Append elements to the list
      taskItem.appendChild(removeButton);
      taskList.appendChild(taskItem);
      // Clear input field
      taskInput.value = "";
    }
    // Event Listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
    // Call addTask on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', addTask);
    });