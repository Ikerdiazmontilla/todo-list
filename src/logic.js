
function createTask(initTitle, initDescription, initDueDate, initPriority){
    let title = initTitle
    let description = initDescription
    let dueDate = initDueDate
    let priority = initPriority
    let state = "to-do"



    const changeTitle = (newTitle) => {
        title = newTitle
    }

    const changeDescription = (newDescription) => {
        description = newDescription
    }

    const changeDueDate = (newDueDate) => {
        dueDate = newDueDate
    }

    const changePriority = (newPriority) => {
        priority = newPriority
    }

    const changeState = () => {
        if(state === "to-do"){
            state = "done"
        }
        else{
            state = "to-do"
        }
    }

    const getInfo = () => {
        return {title, description, dueDate, priority, state};
    }

    return {changeTitle, changeDescription, changeDueDate, changePriority, changeState, getInfo}
};





function createProject(initProjectTitle, initProjectSymbol){
    let projectTitle = initProjectTitle
    let projectSymbol = initProjectSymbol
    let tasks = {}


    const addTask = (task) => {
        let taskTitle = task.showTaskInfo().title
        tasks[taskTitle] = task
    }

    const deleteTask = (taskTitle) => {
        delete tasks[taskTitle]
    }

    const modifyTask = (currentTitle, newTitle, newDescription, newDueDate, newPriority) => {
        tasks[currentTitle].changeTitle(newTitle)
        tasks[currentTitle].changeDescription(newDescription)
        tasks[currentTitle].changeDueDate(newDueDate)
        tasks[currentTitle].changePriority(newPriority)
    }

    const getTaskInfo = (taskTitle) => {
        return tasks[taskTitle].getInfo()
    }

    const changeProjectTitle = (newTitle) => {
        projectTitle = newTitle
    }

    const changeProjectSymbol = (newSymbol) => {
        projectSymbol = newSymbol
    }

    const getProjectInfo = () => {
        return {projectTitle, projectSymbol}
    }

    
    return {addTask, deleteTask, modifyTask, getTaskInfo, changeProjectTitle, changeProjectSymbol, getProjectInfo}
}



let theGodContainerOfTheUniverse = {
    
    addProject: function(project){
        this[project.getProjectInfo().projectTitle] = project
    },

    removeProject: function(projectTitle){
        delete this[projectTitle];
    },

    modifyProject: function(currentTitle, newTitle, newSymbol){
        this[currentTitle].changeProjectTitle(newTitle).changeProjectSymbol(newSymbol)
    },

    addTaskToProject: function(projectTitle, task){
        this[projectTitle].addTask(task)
    },

    removeTaskFromProject: function(projectTitle, taskTitle){
        delete this[projectTitle][taskTitle]
    },

    getTaskInfoFromProject: function(projectTitle, taskTitle){
        this[projectTitle].getTaskInfo(taskTitle)
    },

    modifyTaskFromProject: function(projectTitle, currentTaskTitle, newTitle, newDescription, newDueDate, newPriority){
        this[projectTitle].modifyTask(currentTaskTitle,newTitle, newDescription, newDueDate, newPriority)
    },
}