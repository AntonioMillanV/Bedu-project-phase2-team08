var appDiv = document.getElementById('app');

(function () {      //Body inner elements builder (it only executes once)
    appDiv.className = 'container';

    var sectionNewTask = document.createElement('section');
    sectionNewTask.id = 'newTaskSection';
    sectionNewTask.className = 'col align-items-center mx-3';

    //Adding title to div
    let title = document.createElement('h1');
    title.textContent = 'Things & tasks to do';
    title.className = 'font-weight-bold w-100 text-center'
    sectionNewTask.appendChild(title);

    let formDiv = document.createElement('div');
    formDiv.className = 'row justify-content-center';

    //Adds new input to the node
    let newTaskInput = document.createElement('input');
    newTaskInput.placeholder = 'Add a new task';
    newTaskInput.type = 'text';
    newTaskInput.id = 'newTaskInput';
    newTaskInput.className = 'col-md-7 col-xl-5 mx-3 py-2 textContent';
    formDiv.appendChild(newTaskInput);

    //Adds button that will include new tasks to the list
    let addTaskBtn = document.createElement('button');
    addTaskBtn.id = 'addTaskBtn';
    addTaskBtn.className = 'col-md-4 col-xl-2 btn btn-outline-success mx-3';
    addTaskBtn.textContent = 'Add';
    formDiv.appendChild(addTaskBtn);

    sectionNewTask.appendChild(formDiv);

    appDiv.appendChild(sectionNewTask);
    appDiv.appendChild(document.createElement('hr'));

    //Builds and appends te section dedicated to to do tasks
    let listsContainer = document.createElement('section');
    listsContainer.className = 'row';

    //Divider for to do tasks
    let toDoTasksDiv = document.createElement('div');
    toDoTasksDiv.className = 'col-md-6 mb-3';
    
    //Title for divider for to do tasks
    let divTitle = document.createElement('h2');
    divTitle.textContent = 'To Do';

    toDoTasksDiv.appendChild(divTitle);
    toDoTasksDiv.appendChild(document.createElement('hr'));

    let toDoTasksContainer = document.createElement('ul');
    toDoTasksContainer.id = 'toDoTasks-container';
    toDoTasksDiv.appendChild(toDoTasksContainer);

    //Divider for done tasks
    let doneTasksDiv = document.createElement('div');
    doneTasksDiv.className = 'col-md-6 ';
    
    //Title for divider for to do tasks
    divTitle = document.createElement('h2');
    divTitle.textContent = 'Done';

    doneTasksDiv.appendChild(divTitle);
    doneTasksDiv.appendChild(document.createElement('hr'));

    let doneTasksContainer = document.createElement('ul');
    doneTasksContainer.id = 'doneTasks-container';
    doneTasksDiv.appendChild(doneTasksContainer);


    listsContainer.appendChild(toDoTasksDiv);
    listsContainer.appendChild(doneTasksDiv);

    appDiv.appendChild(listsContainer);

})();