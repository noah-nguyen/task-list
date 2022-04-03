// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

// Load All EventListeners
function loadEventListeners() {
    // Add Task event
    form.addEventListener('submit', addTask);
}

// Add tasks function
function addTask(e){
    if (taskInput.value === '') {
        alert('Add a task');
    }

    // Create li elements after adding task
    // Crete li elements
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //Create text nodes and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element
    const link = document.createElement(a);
    //Add Class
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append link to li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);
    //Clear input
    taskInput.value = '';

    e.preventDefault();
}