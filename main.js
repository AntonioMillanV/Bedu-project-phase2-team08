class HtmlElement {
    constructor(htmlType, htmlId, cssClasses, innerValues, additionalOptions) {
        this.htmlType = htmlType;
        this.htmlId = htmlId;
        this.cssClasses = cssClasses;
        this.innerValues = innerValues;
        this.additionalOptions = additionalOptions;
    }
    
    renderInside(parentNode) {
        var htmlElement = document.createElement(this.htmlType);

        this.htmlId ? htmlElement.id = this.htmlId : htmlElement.id = '';

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

        if(typeof this.innerValues === 'string' && this.innerValues) {
            htmlElement.appendChild(document.createTextNode(this.innerValues));
        }else if (typeof this.innerValues === 'object' ){
            this.innerValues.forEach((element => {
                element.renderInside(this);
            }));
        }

        parentNode.appendChild(htmlElement);
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
            [
                new HtmlElement('label', '', '', document.getElementsByTagName('input')[0].value),
                new HtmlElement('span', '', '', '&imes;')
            ])
            .renderInside(document.getElementById('toDoTasks-container'));
    }else {
        alert('No pueden agregarse tareas vacías');
    }
}

function deleteTask(e) {
    if(confirm('¿Está seguro ue desea eliminar esta tarea?')){
        e.remove();
    }
}