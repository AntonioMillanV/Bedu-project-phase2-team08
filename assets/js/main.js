var newTaskInput = document.querySelector('#newTaskInput');

var toDoContainer = document.querySelector('#toDoTasks-container');
var doneContainer = document.querySelector('#doneTasks-container');

function addNewTask() {
    let toDoTaskCounter = toDoContainer.children.length ++;

    let newTask = document.createElement('li');
    newTask.className = 'd-flex align-items-center mx-3';
    newTask.id = `task_${toDoTaskCounter}`;

    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = 'isDoneCheckbox';
    checkBox.className = 'form-check-input mx-2';

    let taskDescription = document.createElement('label');
    taskDescription.className = 'font-weight-bold mx-2 w-100';
    taskDescription.textContent = document.querySelector('#newTaskInput').value;

    let deleteBtn = document.createElement('span');
    deleteBtn.className = 'btn btn-outline-danger ml-auto';
    deleteBtn.innerHTML = '&times;';

    newTask.appendChild(checkBox);
    newTask.appendChild(taskDescription);
    newTask.appendChild(deleteBtn);
    toDoContainer.appendChild(newTask);

    newTaskInput.value = '';
}

function setTaskAsDone(event){
    let checkedTask = event.target;
    checkedTask.checked = true;

    let taskCatched = event.target.parentElement;
    taskCatched.classList.add('checked');

    doneContainer.appendChild(taskCatched);
}

function restoreTask(event){
    let checkedTask = event.target;
    checkedTask.checked = false;

    let taskCatched = event.target.parentElement;
    taskCatched.classList.remove('checked');

    toDoContainer.appendChild(taskCatched);
}