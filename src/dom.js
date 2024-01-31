import { createTask, theGodContainerOfTheUniverse, createProject } from "./logic";
import { storage } from "./storage";
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
        mainDiv.addEventListener("click", this.toggleState.bind(this));
    
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
            const strikethrough = document.createElement('s')
            strikethrough.appendChild(pTitle)
            mainDiv.appendChild(buttonComplete)
            mainDiv.appendChild(strikethrough)
        }
        else{
            imgCircle.src = circle
            buttonComplete.appendChild(imgCircle)

            mainDiv.appendChild(buttonComplete)
            mainDiv.appendChild(pTitle)
        }
        mainDiv.appendChild(pDate)
        mainDiv.appendChild(buttonEdit)
        mainDiv.appendChild(buttonTrash)
        mainDiv.appendChild(buttonInfo)
        return mainDiv
    
    },
    displayTaskDialog: function(){
        const taskDialog = document.querySelector("#task-dialog")
        taskDialog.showModal()
        const closeButton = taskDialog.querySelector(".close")
        closeButton.addEventListener("click", dom.closeDialog)
        const cancelButton = taskDialog.querySelector(".cancel")
        cancelButton.addEventListener("click", dom.closeDialog)
        const addButton = taskDialog.querySelector(".add")
        
    },
    addTask: function(){
        this.displayTaskDialog()
        function addTaskEventListener(event) {
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
            taskForm.removeEventListener("submit", addTaskEventListener)
        }
        const taskForm = document.querySelector("#task-form")
        taskForm.addEventListener("submit",addTaskEventListener)

    },
    editTask: function(event){
        event.stopPropagation()
        this.displayTaskDialog()
        const taskForm = document.querySelector("#task-form")
        const currentTitle = event.currentTarget.parentElement.querySelector("p").textContent
        const taskInfo = theGodContainerOfTheUniverse.getTaskInfoFromProject(currentTitle)
        taskForm.elements["taskTitle"].value = taskInfo.title
        taskForm.elements["taskDescription"].value = taskInfo.description
        taskForm.elements["taskDueDate"].value = taskInfo.dueDate
        taskForm.elements["taskPriority"].value = taskInfo.priority
        
        function editTaskEventListener(event) {
            event.preventDefault()
            let taskTitle = event.target.elements["taskTitle"].value
            let taskDescription = event.target.elements["taskDescription"].value
            let taskDueDate = event.target.elements["taskDueDate"].value
            let taskPriority = event.target.elements["taskPriority"].value

            const projectTitle= document.querySelector("h2").textContent.substring(2).trimStart()
            theGodContainerOfTheUniverse.modifyTaskFromProject(projectTitle,currentTitle,taskTitle,taskDescription,taskDueDate,taskPriority)
            

            const divTasks = document.querySelector(".tasks")
            divTasks.innerHTML = ""
            const textHeader = document.querySelector(".header-p");
            let counter = 0
            Object.values(theGodContainerOfTheUniverse.projects[projectTitle].tasks).forEach((task) => {
            divTasks.appendChild(dom.createDomTask(task))
            counter++
        })
            textHeader.style.setProperty('--counter-value', '"(' + counter + ')"')

            taskForm.reset()
            const taskDialog = document.querySelector("#task-dialog")
            taskDialog.close()
            taskForm.removeEventListener("submit", editTaskEventListener)
        }
        taskForm.addEventListener("submit",editTaskEventListener)
    },
    
    removeTask: function(event){
        event.stopPropagation()
        const taskTitle = event.currentTarget.parentElement.querySelector("p").textContent
        const divTasks = document.querySelector(".tasks")
        const sidebar = document.querySelector(".sidebar")
        const buttonClick = sidebar.querySelector(".active")
        divTasks.innerHTML = ""
        Object.values(theGodContainerOfTheUniverse.projects).forEach((project) => {
            if(project.tasks[taskTitle]){
                theGodContainerOfTheUniverse.removeTaskFromProject(taskTitle)
            }
        })
        buttonClick.click()
        
    },
    showInfo: function(event){
        event.stopPropagation()
        const infoDialog = document.querySelector("#info-dialog")
        const contentParas = infoDialog.querySelectorAll(".info-content")
        const buttonCancel = infoDialog.querySelector(".close")
        const taskTitle = event.currentTarget.parentElement.querySelector("p").textContent
        const infoTask = theGodContainerOfTheUniverse.getTaskInfoFromProject(taskTitle)
        infoDialog.showModal()
        buttonCancel.addEventListener("click", () => {infoDialog.close() 
        const newButton = buttonCancel.cloneNode(true)
        buttonCancel.parentNode.replaceChild(newButton, buttonCancel);})

        contentParas.forEach((para) => {
            const paraId = para.id.substring(5)
            para.textContent = infoTask[paraId]
        })

    },
    toggleState: function(event){
        let taskTitle = event.currentTarget.querySelector("p").textContent
        
        theGodContainerOfTheUniverse.toggleTaskState(taskTitle)
        if(theGodContainerOfTheUniverse.getTaskInfoFromProject(taskTitle).state === "to-do" ){
            const title = event.currentTarget.querySelector("p")
            const s = title.parentElement
            s.parentElement.replaceChild(title, s)
            const imgCircle = new Image()
            imgCircle.src = circle
            const currentImage = event.currentTarget.firstElementChild.firstElementChild
            event.currentTarget.firstElementChild.replaceChild(imgCircle,currentImage)
        }
        else{
            const title = event.currentTarget.querySelector("p")
            const s = document.createElement("s")
            title.parentElement.insertBefore(s,title)
            s.appendChild(title)
            const imgCompleted = new Image()
            imgCompleted.src = completed
            const currentImage = event.currentTarget.firstElementChild.firstElementChild
            event.currentTarget.firstElementChild.replaceChild(imgCompleted,currentImage)
        }
    },





    displayProjectDialog: function(){
        const projectDialog = document.querySelector("#project-dialog")
        projectDialog.showModal()
        const closeButton = projectDialog.querySelector(".close")
        closeButton.addEventListener("click", dom.closeDialog)
        const cancelButton = projectDialog.querySelector(".cancel")
        cancelButton.addEventListener("click", dom.closeDialog)
    },
    addProject: function(){
        dom.displayProjectDialog()
        document.querySelector("#backpack").previousElementSibling.classList.add("active")
        const projectForm = document.querySelector("#project-form")
        function addProjectEventListener(event) {
            event.preventDefault()
            let projectTitle = event.target.elements["title"].value
            let projectSymbol = event.target.elements["projectSymbol"].value
            let newProject = createProject(projectTitle, projectSymbol)
            theGodContainerOfTheUniverse.addProject(newProject)
            dom.showProjectsInSidebar()
            dom.removeActiveClassFromSymbols()
            const projectDialog = document.querySelector("#project-dialog")
            const projectParas = document.querySelectorAll("p.title-of-project")
            projectParas.forEach((p) => {
                if(p.textContent.substring(3) === projectTitle){
                    p.parentElement.click()
                }
            })
            projectForm.reset()
            projectDialog.close()
            projectForm.removeEventListener("submit", addProjectEventListener)
        }

        projectForm.addEventListener("submit", addProjectEventListener)
    },

    editProject: function(event){
        event.stopPropagation()
        const projectInfo = theGodContainerOfTheUniverse.projects[event.currentTarget.parentElement.querySelector("p").textContent.substring(2).trimStart()].getProjectInfo()
        dom.displayProjectDialog()
        const buttonActive = document.querySelector(`input[value='${projectInfo.projectSymbol}']`).previousElementSibling
        buttonActive.classList.add("active")
        const projectForm = document.querySelector("#project-form")
        projectForm.elements["title"].value = projectInfo.projectTitle
        projectForm.elements["projectSymbol"].value = projectInfo.projectSymbol

        function editEventListener(event) {
            event.preventDefault()
            let newTitle = event.target.elements["title"].value
            let newSymbol = event.target.elements["projectSymbol"].value
            theGodContainerOfTheUniverse.modifyProject(projectInfo.projectTitle, newTitle, newSymbol)
            dom.showProjectsInSidebar()
            dom.removeActiveClassFromSymbols()
            const projectDialog = document.querySelector("#project-dialog")
            projectForm.reset()
            projectDialog.close()
            projectForm.removeEventListener("submit", editEventListener)
        }

        projectForm.addEventListener("submit", editEventListener)
    },
    deleteProject: function(event){
        event.stopPropagation()
        const projectTitle = event.currentTarget.parentElement.querySelector("p").textContent.substring("2").trimStart()
        const h2 = document.querySelector("h2").textContent.substring('2').trimStart()
        if(h2 === projectTitle){
            const buttonAll = document.querySelector("#all")
            buttonAll.click();
        }
        theGodContainerOfTheUniverse.removeProject(projectTitle)
        dom.showProjectsInSidebar()
    },
    removeActiveClassFromSidebar: function(){
        const categoryButtons = document.querySelectorAll(".category-button")
        categoryButtons.forEach((button) => {
            button.classList.remove("active")
        })
        const projectButtons= document.querySelectorAll(".project")
        projectButtons.forEach((button) => {
            button.classList.remove("active")
        })
    },
    removeActiveClassFromSymbols: function(){
        const buttonSymbols = document.querySelectorAll(".radio-label")
        buttonSymbols.forEach((button) => {
            button.classList.remove("active")
        })
        
    },

    displayProjectInMain: function(event){
        let counter = 0
        dom.removeActiveClassFromSidebar()
        dom.displayMainContent(event)
        const divTasks = document.querySelector(".tasks")
        Object.values(theGodContainerOfTheUniverse.projects[event.currentTarget.querySelector("p").textContent.substring(2).trimStart()].tasks).forEach((task) => {
            divTasks.appendChild(dom.createDomTask(task))
            counter++
        })
        event.currentTarget.classList.add("active")
        const textHeader = document.querySelector(".header-p");
        textHeader.style.setProperty('--counter-value', '"(' + counter + ')"')
    },


    createDomProject: function(project){
        const divProject = document.createElement("div")
        divProject.classList.add("project")
        divProject.addEventListener("click", this.displayProjectInMain.bind(this))

        const pTitle = document.createElement("p")
        pTitle.classList.add("title-of-project")
        pTitle.textContent = `${project.getProjectInfo().projectSymbol} ${project.getProjectInfo().projectTitle}`

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
        dom.removeActiveClassFromSymbols()
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
                dom.removeActiveClassFromSymbols()
                event.target.classList.add("active")
            })
        })
    },
    displayCategory: function(event){
        let counter = 0
        let tasksToDisplay;
        dom.removeActiveClassFromSidebar()
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


