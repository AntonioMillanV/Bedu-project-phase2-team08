var appDiv = document.getElementById('app');

(function () {      //Body inner elements builder (it only executes once)
    appDiv.className = 'container-fluid';

    var sectionNewTask = document.createElement('div');
    sectionNewTask.id = 'newTaskSection';
    sectionNewTask.className = 'col';

    //Adding title to div
    let title = document.createElement('h1');
    title.textContent = 'Things & tasks to do';
    sectionNewTask.appendChild(title);

    //Adds new input to the node
    let newTaskInput = document.createElement('input');
    newTaskInput.placeholder = 'Add a new task';
    newTaskInput.type = 'text';
    newTaskInput.id = 'newTaskInput';
    newTaskInput.className = 'form-control-lg mx-3';
    sectionNewTask.appendChild(newTaskInput);

    //Adds button that will include new tasks to the list
    let addTaskBtn = document.createElement('button');
    addTaskBtn.id = 'addTaskBtn';
    addTaskBtn.classList = ['btn', 'btn-outline-success', 'mx-3'];
    addTaskBtn.textContent = 'Add';
    sectionNewTask.appendChild(addTaskBtn);

    appDiv.appendChild(sectionNewTask);
})();