import { isToday, isWithinInterval, addDays, format, set } from "date-fns"
import {storage} from "./storage";


function createTask(initTitle, initDescription, initDueDate, initPriority, initState = "to-do"){
    let title = initTitle
    let description = initDescription
    let dueDate = initDueDate
    let priority = initPriority
    let state = initState
 

 
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
        if(state === "done"){
            state = "to-do"
        }
        else{
            state = "done"
        }
    }
 
 
    const getInfo = () => {
        return {title, description, dueDate, priority, state};
    }
 
 
    return {
        get title(){return title;}, 
        get description(){return description;},
        get dueDate(){return dueDate;},
        get priority(){return priority;},
        get state(){return state;},
        changeTitle, changeDescription, changeDueDate, changePriority, changeState, getInfo}
 };
 
 
 
 
 
 
 
 
 
 
 function createProject(initProjectTitle, initProjectSymbol){
    let projectTitle = initProjectTitle
    let projectSymbol = initProjectSymbol
    let tasks = {}

 
    const addTask = (task) => {
        let taskTitle = task.getInfo().title
        tasks[taskTitle] = task
    }
 
 
    const deleteTask = (taskTitle) => {
        delete tasks[taskTitle]
    }
 
 
    const modifyTask = (currentTitle, newTitle, newDescription, newDueDate, newPriority) => {
        const newTask = tasks[currentTitle];
        newTask.changeTitle(newTitle);
        newTask.changeDescription(newDescription);
        newTask.changeDueDate(newDueDate);
        newTask.changePriority(newPriority);
        delete tasks[currentTitle];
        tasks[newTitle] = newTask;
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
   
    return {
        get tasks(){return tasks},
        get projectTitle(){return projectTitle;}, 
        get projectSymbol(){return projectSymbol;},
        addTask, deleteTask, modifyTask, getTaskInfo, changeProjectTitle, changeProjectSymbol, getProjectInfo}
 }
 
 
 
 
 
 
 let theGodContainerOfTheUniverse = {
    projects: {},
   
    addProject: function(project){
        this.projects[project.getProjectInfo().projectTitle] = project

        storage.storeInfo()
    },
 
 
    removeProject: function(projectTitle){
        delete this.projects[projectTitle];

        storage.storeInfo()
    },
 
 
    modifyProject: function(currentTitle, newTitle, newSymbol){
        const newProject = this.projects[currentTitle]
        newProject.changeProjectTitle(newTitle)
        newProject.changeProjectSymbol(newSymbol)
        delete this.projects[currentTitle]
        this.projects[newTitle] = newProject

        storage.storeInfo()
    },
 
 
    addTaskToProject: function(projectTitle, task){
        const newProject = this.projects[projectTitle]
        newProject.addTask(task)
        delete this.projects[projectTitle]
        this.projects[newProject.projectTitle] = newProject

        storage.storeInfo()
    },

    
    removeTaskFromProject: function(taskTitle){
        
        Object.values(this.projects).forEach(project => {
            if(project.tasks[taskTitle]){
                const newProject = project
                newProject.deleteTask(taskTitle)
                delete this.projects[project.projectTitle]
                this.projects[newProject.projectTitle] = newProject 
            }
        })

        storage.storeInfo()
    },
 
 
    getTaskInfoFromProject: function(taskTitle){
        let taskInfo;
        Object.values(this.projects).forEach(project => {
            if(project.tasks[taskTitle]){
                taskInfo = project.tasks[taskTitle].getInfo()
            }
        });
        return taskInfo

    },
 
 
    modifyTaskFromProject: function(projectTitle, currentTitle, newTitle, newDescription, newDueDate, newPriority){
        const newProject = this.projects[projectTitle]
        newProject.modifyTask(currentTitle,newTitle, newDescription, newDueDate, newPriority)
        delete this.projects[projectTitle]
        this.projects[newProject.projectTitle] = newProject 

        storage.storeInfo()
    },

    toggleTaskState: function(taskTitle){
        Object.values(this.projects).forEach(project => {
            if(project.tasks[taskTitle]){
                const newProject = project
                newProject.tasks[taskTitle].changeState()
                delete this.projects[project.projectTitle]
                this.projects[newProject.projectTitle] = newProject 
            }
            
        });

        storage.storeInfo()
    },

    getAllTasks: function(){
        let allTasks = {}
        Object.values(this.projects).forEach(project => {
            Object.values(project.tasks).forEach(task => {
                allTasks[task.getInfo().title] = task
            });
        });
        return allTasks
    },
 
 
    getImportantTasks: function(){
        let important = {};
        Object.values(this.projects).forEach(project => {
            Object.values(project.tasks).forEach(task => {
                if(task.getInfo().priority === "important"){
                    important[task.getInfo().title] = task;
                }
            });
        });
        return important;
    },


    sortByState: function(){
        let done = {};
        let todo = {};
        Object.values(this.projects).forEach(project => {
            Object.values(project.tasks).forEach(task => {
                if(task.getInfo().state === "to-do"){
                    todo[task.getInfo().title] = task;
                } else {
                    done[task.getInfo().title] = task;
                }
            });
        });
        return {done, todo};
    },
    


    sortByDate: function() {
        let dueToday = {};
        let dueThisWeek = {};
        const today = new Date();
        const endOfWeek = addDays(today, 7);
    
        Object.values(this.projects).forEach(project => {
            Object.values(project.tasks).forEach(task => {
                const taskDueDate = new Date(task.getInfo().dueDate);
    
                if (isToday(taskDueDate)) {
                    dueToday[task.getInfo().title] = task;
                } else if (isWithinInterval(taskDueDate, { start: today, end: endOfWeek })) {
                    dueThisWeek[task.getInfo().title] = task;
                }
            });
        });
    
        return { dueToday, dueThisWeek };
    },

 }




export {createTask, createProject, theGodContainerOfTheUniverse}