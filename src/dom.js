import { createTask, theGodContainerOfTheUniverse, createProject } from "./logic";
import circle from "./images/circle.svg";
import edit from "./images/edit.svg";
import trashCan from "./images/delete.svg"
import info from "./images/info.svg"
import completed from "./images/check-circle.svg"


let dom = {
    displayMainContent: function(event){
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
            addButton.addEventListener("click", this.addTask.bind(this))
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
        buttonEdit.addEventListener("click", this.editTask.bind(this))
    
        const buttonTrash = document.createElement("button")
        buttonTrash.className = "left trash"
        const imgTrash = new Image()
        imgTrash.src = trashCan
        buttonTrash.appendChild(imgTrash)
        buttonTrash.addEventListener("click", this.removeTask.bind(this))
    
        const buttonInfo = document.createElement("button")
        buttonInfo.className = "left info"
        const imgInfo = new Image()
        imgInfo.src = info
        buttonInfo.appendChild(imgInfo)
        buttonInfo.addEventListener("click", this.showInfo.bind(this))

        const buttonComplete = document.createElement("button")
        const imgCircle = new Image()
        if(taskInfo.state === "done"){
            imgCircle.src = completed
            buttonComplete.appendChild(imgCircle)
            buttonComplete.addEventListener("click", this.toggleState.bind(this));
            const strikethrough = document.createElement('s')
            strikethrough.appendChild(pTitle)
            mainDiv.appendChild(buttonComplete)
            mainDiv.appendChild(strikethrough)
        }
        else{
            imgCircle.src = circle
            buttonComplete.appendChild(imgCircle)
            buttonComplete.addEventListener("click", this.toggleState.bind(this));
            mainDiv.appendChild(buttonComplete)
            mainDiv.appendChild(pTitle)
        }
        mainDiv.appendChild(pDate)
        mainDiv.appendChild(buttonEdit)
        mainDiv.appendChild(buttonTrash)
        mainDiv.appendChild(buttonInfo)
        return mainDiv
    
    },
    addTask: function(event){
        const taskDialog = document.querySelector("#task-dialog")
        taskDialog.showModal()
        const closeButton = taskDialog.querySelector(".close")
        closeButton.addEventListener("click", dom.closeDialog)
        const cancelButton = taskDialog.querySelector(".cancel")
        cancelButton.addEventListener("click", dom.closeDialog)
        const addButton = taskDialog.querySelector(".add")
        
    },
    editTask: function(){},
    removeTask: function(){},
    showInfo: function(){},
    toggleState: function(event){
        let taskTitle;
        if(event.target.parentElement.nextElementSibling.querySelector("p")){
            taskTitle = event.target.parentElement.nextElementSibling.querySelector("p").textContent
        }
        else{
            taskTitle = event.target.parentElement.nextElementSibling.textContent
        }
        theGodContainerOfTheUniverse.toggleTaskState(taskTitle)
        if(theGodContainerOfTheUniverse.getTaskInfoFromProject(taskTitle).state === "to-do" ){
            const title = event.target.parentElement.nextElementSibling.querySelector("p")
            const s = title.parentElement
            s.parentElement.replaceChild(title, s)
            const imgCircle = new Image()
            imgCircle.src = circle
            event.target.parentElement.replaceChild(imgCircle,event.target)
        }
        else{
            const title = event.target.parentElement.nextElementSibling
            const s = document.createElement("s")
            title.parentElement.insertBefore(s,title)
            s.appendChild(title)
            const imgCompleted = new Image()
            imgCompleted.src = completed
            event.target.parentElement.replaceChild(imgCompleted,event.target )
        }
    },





    addProject: function(){
        const projectDialog = document.querySelector("#project-dialog")
        projectDialog.showModal()
        const closeButton = projectDialog.querySelector(".close")
        closeButton.addEventListener("click", dom.closeDialog)
        const cancelButton = projectDialog.querySelector(".cancel")
        cancelButton.addEventListener("click", dom.closeDialog)
    },
    editProject: function(){},
    deleteProject: function(){},
    removeActiveClass: function(){
        const categoryButtons = document.querySelectorAll(".category-button")
        categoryButtons.forEach((button) => {
            button.classList.remove("active")
        })
        const projectButtons= document.querySelectorAll(".project")
        projectButtons.forEach((button) => {
            button.classList.remove("active")
        })
    },

    displayProjectInMain: function(event){
        let counter = 0
        dom.removeActiveClass()
        dom.displayMainContent(event)
        const divTasks = document.querySelector(".tasks")
        Object.values(theGodContainerOfTheUniverse.projects[event.target.textContent.substring(2).trimStart()].tasks).forEach((task) => {
            divTasks.appendChild(dom.createDomTask(task))
            counter++
        })
        event.target.parentElement.classList.add("active")
        const textHeader = document.querySelector(".header-p");
        textHeader.style.setProperty('--counter-value', '"(' + counter + ')"')
    },


    createDomProject: function(project){
        const divProject = document.createElement("div")
        divProject.classList.add("project")

        const pTitle = document.createElement("p")
        pTitle.classList.add("title-of-project")
        pTitle.textContent = `${project.getProjectInfo().projectSymbol} ${project.getProjectInfo().projectTitle}`
        pTitle.addEventListener("click", this.displayProjectInMain.bind(this))

        const buttonEdit = document.createElement("button")
        buttonEdit.className = "project-button"
        const imgEdit = new Image()
        imgEdit.src = edit
        buttonEdit.appendChild(imgEdit)
        buttonEdit.addEventListener("click", this.editProject.bind(this))

        const buttonTrash = document.createElement("button")
        buttonTrash.className = "project-button"
        const imgTrash = new Image()
        imgTrash.src = trashCan
        buttonTrash.appendChild(imgTrash)
        buttonTrash.addEventListener("click", this.deleteProject.bind(this))

        divProject.appendChild(pTitle)
        divProject.appendChild(buttonEdit)
        divProject.appendChild(buttonTrash)

        return divProject
    },
    showProjectsInSidebar: function(){
        const projectsContainer = document.querySelector(".projects-container")
        while(projectsContainer.firstChild){
            projectsContainer.removeChild(projectsContainer.firstChild)
        }
        Object.values(theGodContainerOfTheUniverse.projects).forEach((project) => {
            projectsContainer.appendChild(this.createDomProject(project))
        })
    },

    closeDialog: function(event){
        let dialog = event.target.closest("dialog")
        let form = dialog.querySelector("form")
        form.reset()
        dialog.close()
    },















    addEventListeners: function(){
        const categoryButtons = document.querySelectorAll(".category-button")
        categoryButtons.forEach((button) => {
            button.addEventListener("click", dom.displayCategory)
        })
        const buttonAll = document.querySelector("#all")
        buttonAll.click();


        const addProjectButton = document.querySelector("#add-project")
        addProjectButton.addEventListener("click", dom.addProject)
        const buttonSymbols = document.querySelectorAll(".radio-label")
        buttonSymbols.forEach((button)=>{
            button.addEventListener("click", (event) => {
                buttonSymbols.forEach((button) => {
                    button.classList.remove("active")
                })
                event.target.classList.add("active")
            })
        })
        const projectForm = document.querySelector("#project-form")
        projectForm.addEventListener("submit", (event) => {
            event.preventDefault()
            let projectTitle = event.target.elements["title"].value
            let projectSymbol = event.target.elements["projectSymbol"].value
            let newProject = createProject(projectTitle, projectSymbol)
            theGodContainerOfTheUniverse.addProject(newProject)
            dom.showProjectsInSidebar()
            const projectDialog = document.querySelector("#project-dialog")
            projectForm.reset()
            projectDialog.close()
        })



        const taskForm = document.querySelector("#task-form")
        taskForm.addEventListener("submit", (event) => {
            event.preventDefault()
            let taskTitle = event.target.elements["taskTitle"].value
            let taskDescription = event.target.elements["taskDescription"].value
            let taskDueDate = event.target.elements["taskDueDate"].value
            let taskPriority = event.target.elements["taskPriority"].value
            const newTask = createTask(taskTitle, taskDescription,taskDueDate,taskPriority)

            const currentProjectTitle= document.querySelector("h2").textContent.substring(2).trimStart()
            theGodContainerOfTheUniverse.addTaskToProject(currentProjectTitle, newTask)

            const divTasks = document.querySelector(".tasks")
            divTasks.appendChild(dom.createDomTask(newTask))

            const textHeader = document.querySelector(".header-p");
            let counter = 0
            divTasks.childNodes.forEach(() => counter++)
            textHeader.style.setProperty('--counter-value', '"(' + counter + ')"')

            taskForm.reset()
            const taskDialog = document.querySelector("#task-dialog")
            taskDialog.close()
        })
    },
    displayCategory: function(event){
        let counter = 0
        let tasksToDisplay;
        dom.removeActiveClass()
        dom.displayMainContent(event)
        const divTasks = document.querySelector(".tasks")
        if(event.target.id === "all"){
            tasksToDisplay = theGodContainerOfTheUniverse.getAllTasks()
        }
        else if(event.target.id === "today"){
            tasksToDisplay = theGodContainerOfTheUniverse.sortByDate().dueToday
        }
        else if(event.target.id === "week"){
            tasksToDisplay = theGodContainerOfTheUniverse.sortByDate().dueThisWeek
        }
        else if(event.target.id === "important"){
            tasksToDisplay = theGodContainerOfTheUniverse.getImportantTasks()
        }
        else if(event.target.id === "todo"){
            tasksToDisplay = theGodContainerOfTheUniverse.sortByState().todo
        }
        else if(event.target.id === "completed"){
            tasksToDisplay = theGodContainerOfTheUniverse.sortByState().done
        }
        Object.values(tasksToDisplay).forEach((task) => {
            divTasks.appendChild(dom.createDomTask(task))
            counter++
        })
        event.target.classList.add("active")
        const textHeader = document.querySelector(".header-p");
        textHeader.style.setProperty('--counter-value', '"(' + counter + ')"')
    },
}



export {dom}


