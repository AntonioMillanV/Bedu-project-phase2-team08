var newTaskInput = document.querySelector('#newTaskInput');

document.querySelector('#newTaskInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addNewTask();
    }
});

document.querySelector('#addTaskBtn').addEventListener('click', function () {
    if (newTaskInput.value) {
        addNewTask();
    }
});

document.querySelector('#toDoTasks-container').addEventListener('click', function (event) {
    if (event.target && event.target.matches('#isDoneCheckbox')) {
        setTaskAsDone(event);
    } else if (event.target && event.target.matches('span')) {
        if (confirm('¿Está seguro de eliminar esta tarea?')) {
            event.currentTarget.remove();
        }
    }
});

document.querySelector('#doneTasks-container').addEventListener('click', function (event) {
    if (event.target && event.target.matches('#isDoneCheckbox')) {
        restoreTask(event);
    } else if (event.target && event.target.matches('span')) {
        if (confirm('¿Está seguro de eliminar esta tarea?')) {
            event.currentTarget.remove();
        }
    }
});