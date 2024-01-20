import { createTask, theGodContainerOfTheUniverse } from "./logic";
import circle from "./images/circle.svg";
import edit from "./images/edit.svg";
import trashCan from "./images/delete.svg"
import info from "./images/info.svg"


let dom = {
    createMainContent: function(event){
        const mainContainer = document.querySelector('.main-content');

        while(mainContainer.firstChild){
            mainContainer.removeChild(mainContainer.firstChild)
        }
    
        const h2 = document.createElement('h2');
        h2.textContent = event.target.textContent;
    
        const mainWrapper = document.createElement('div');
        mainWrapper.className = 'main-wrapper';
    
        const headerWrapper = document.createElement('div');
        headerWrapper.className = 'header-wrapper';
    
        const headerText = document.createElement('p');
        headerText.textContent = 'Tasks';
        headerText.className = "header-p"
        headerWrapper.appendChild(headerText);
    
        const arrayNames = ["all","today", "week", "important", "completed", "todo"]
        let isInArray = arrayNames.includes(event.target.id);
        if(isInArray == false){
            const addButton = document.createElement('button');
            addButton.id = 'add-task';
            addButton.textContent = '⊕';
            headerWrapper.appendChild(addButton);
        }
    
        const divTasks = document.createElement("div")
        divTasks.className = "tasks"
  
    
        mainContainer.appendChild(h2);
        mainContainer.appendChild(mainWrapper);
        mainWrapper.appendChild(headerWrapper);
        mainWrapper.appendChild(divTasks)
        mainContainer.appendChild(mainWrapper)
    },


    createDomTask: function(task){
        const taskInfo = task.getInfo()
        const mainDiv = document.createElement('div')
        mainDiv.className = "task"
    
        const buttonComplete = document.createElement("button")
        const imgCircle = new Image()
        imgCircle.src = circle
        buttonComplete.appendChild(imgCircle)
        buttonComplete.addEventListener("click", this.toggleState)
    
        const pTitle = document.createElement("p")
        pTitle.className = "title"
        pTitle.textContent = taskInfo.title
    
        const pDate = document.createElement("p")
        pDate.className = "date"
        pDate.textContent = taskInfo.dueDate
    
        const buttonEdit = document.createElement("button")
        buttonEdit.className = "left edit"
        const imgEdit = new Image()
        imgEdit.src = edit
        buttonEdit.appendChild(imgEdit)
        buttonEdit.addEventListener("click", this.editTask)
    
        const buttonTrash = document.createElement("button")
        buttonTrash.className = "left trash"
        const imgTrash = new Image()
        imgTrash.src = trashCan
        buttonTrash.appendChild(imgTrash)
        buttonTrash.addEventListener("click", this.removeTask)
    
        const buttonInfo = document.createElement("button")
        buttonInfo.className = "left info"
        const imgInfo = new Image()
        imgInfo.src = info
        buttonInfo.appendChild(imgInfo)
        buttonInfo.addEventListener("click", this.showInfo)
    
        mainDiv.appendChild(buttonComplete)
        mainDiv.appendChild(pTitle)
        mainDiv.appendChild(pDate)
        mainDiv.appendChild(buttonEdit)
        mainDiv.appendChild(buttonTrash)
        mainDiv.appendChild(buttonInfo)
        return mainDiv
    
    },
    editTask: function(){},
    removeTask: function(){},
    showInfo: function(){},
    toggleState: function(){},
    addEventListeners: function(){
        const allButton = document.querySelector("#all")
        allButton.addEventListener("click", (event) => {
            this.createMainContent(event)
            const divTasks = document.querySelector(".tasks")
            const allTasks = theGodContainerOfTheUniverse.getAllTasks()
            let counter = 0
            Object.values(allTasks).forEach((task) => {
                divTasks.appendChild(this.createDomTask(task))
                counter++
            })
            event.target.classList.add("active")
            const textHeader = document.querySelector(".header-p");
            textHeader.style.setProperty('--counter-value', '"(' + counter + ')"');

        })
    },
}






export {dom}


