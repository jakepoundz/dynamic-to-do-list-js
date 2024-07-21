// Event listener for page load
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

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

      // Clear input field
      taskInput.value = "";
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
    
    document.addEventListener('DOMContentLoaded', addTask);
  });