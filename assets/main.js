class HtmlElement {
    constructor(htmlType, htmlId, cssClasses, innerValues, additionalHtmlOptions) {
        this.htmlType = htmlType;
        this.htmlId = htmlId;
        this.cssClasses = cssClasses;
        this.innerValues = innerValues;
        this.additionalHtmlOptions = additionalHtmlOptions;

        setHtmlPropertiesAndValues();
    }
    
    buildHtmlElement(){
        //Create an HTML node with specified nodeType
        var htmlElement = document.createElement(this.htmlType);

        //Sets an ID to the node (if it exists)
        this.htmlId ? htmlElement.id = this.htmlId : htmlElement.id = '';

        //Add CSS class or classes (in case that they exists as a unique string or an array)
        switch (typeof this.cssClasses) {
            case 'string':
                htmlElement.className = this.cssClasses;
                break;
            case 'object':
                for(let index of this.cssClasses){
                    htmlElement.classList.add(index);
                }
                break;
            default:
                htmlElement.className = '';
        }

        //Appends nodes or text values inside the current node
        if(typeof this.innerValues === 'string' && this.innerValues) {
            htmlElement.textContent = this.innerValues;
        }else if (typeof this.innerValues === 'object' ){
            this.innerValues.forEach((element => {
                this.appendChild(element);
            }));
        }

        //sets additional properties, as data, events, etc
        let keys = object.keys(this.additionalHtmlOptions);
        for(let i = 0 ; i < keys.length ; i++) {
            htmlElement[keys[i]] = this.additionalHtmlOptions[keys[i]];
        }
    }

    renderInside(parentNode) {
        //Appends an element to the parent Node
        parentNode.appendChild(htmlElement);
    }
}

class TaskListItem{
    constructor(isDone, taskDescription){
        this.isDone = isDone;
        this.taskDescription = taskDescription;

        createHtmlTaskListItem();
    }

    createTaskListItem(){
        let taskCounter = document.getElementById('toDoTasks-container').children.length ++;
        return new HtmlElement(
            'li',
            `task_${taskCounter}`,
            'my-2',
            [
                new HtmlElement(
                    'input',
                    '',
                    '',
                    '',
                    {
                        type: "checkbox"
                    }
                ),
                new HtmlElement(
                    'span',
                    '',
                    'ml-auto',
                    '&times;',
                    {}
                )
            ],
            {}
            )
    }
}

function addNewTask() {
    let taskCounter = document.getElementById('toDoTasks-container').children.length + 1;
    if (document.getElementsByTagName('input')[0].value) {
        // return new htmlElement()
        let result = new HtmlElement(
            'li',
            `task_${taskCounter}`,
            'task',
            document.getElementsByTagName('input')[0].value)
            .renderInside(document.getElementById('toDoTasks-container'));
        
        document.getElementsByTagName('input')[0].value = '';
    }else {
        alert('No pueden agregarse tareas vacías');
    }
}