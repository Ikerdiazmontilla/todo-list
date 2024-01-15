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
 
 
    return {title, description,dueDate, priority, state, changeTitle, changeDescription, changeDueDate, changePriority, changeState, getInfo}
 };
 
 
 
 
 
 
 
 
 
 
 function createProject(initProjectTitle, initProjectSymbol){
    let projectTitle = initProjectTitle
    let projectSymbol = initProjectSymbol
    let tasks = {}

 
    const addTask = (task) => {
        let taskTitle = task.getInfo().title
        tasks[taskTitle] = task
    }
 
 
    const deleteTask = (task) => {
        
        let taskTitle = task.getInfo().title
        if(tasks[taskTitle]){
        delete tasks[taskTitle]
        }
        else{
            console.log("Task not found")
        }
    }
 
 
    const modifyTask = (task, newTitle, newDescription, newDueDate, newPriority) => {
        const currentTitle = task.getInfo().title
        const newTask = tasks[currentTitle];
        newTask.changeTitle(newTitle);
        newTask.changeDescription(newDescription);
        newTask.changeDueDate(newDueDate);
        newTask.changePriority(newPriority);
        delete tasks[currentTitle];
        tasks[newTitle] = newTask;
    }
 
 
    const getTaskInfo = (task) => {
        let taskTitle = task.getInfo().title
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
 
 
   
    return {tasks, addTask, deleteTask, modifyTask, getTaskInfo, changeProjectTitle, changeProjectSymbol, getProjectInfo}
 }
 
 
 
 
 
 
 let theGodContainerOfTheUniverse = {
    projects: {},
   
    addProject: function(project){
        this.projects[project.getProjectInfo().projectTitle] = project
    },
 
 
    removeProject: function(project){
        const projectTitle = project.getProjectInfo().projectTitle
        delete this.projects[projectTitle];
    },
 
 
    modifyProject: function(project, newTitle, newSymbol){
        const currentTitle = project.getProjectInfo().projectTitle
        const newProject = this.projects[currentTitle]
        newProject.changeProjectTitle(newTitle)
        newProject.changeProjectSymbol(newSymbol)
        delete this.projects[currentTitle]
        this.projects[newTitle] = newProject
    },
 
 
    addTaskToProject: function(project, task){
        const projectTitle = project.getProjectInfo().projectTitle
        this.projects[projectTitle].addTask(task)
    },
 
 
    removeTaskFromProject: function(project, task){
        const projectTitle = project.getProjectInfo().projectTitle
        const taskTitle = task.getInfo().title
        delete this.projects[projectTitle].tasks[taskTitle]
    },
 
 
    getTaskInfoFromProject: function(project, task){
        const projectTitle = project.getProjectInfo().projectTitle
        return this.projects[projectTitle].getTaskInfo(task)
    },
 
 
    modifyTaskFromProject: function(project, task, newTitle, newDescription, newDueDate, newPriority){
        const projectTitle = project.getProjectInfo().projectTitle
        const taskTitle = task.getInfo().title
        this.projects[projectTitle].modifyTask(currentTaskTitle,newTitle, newDescription, newDueDate, newPriority)
    },
 
 
    // getImportantTasks: function(){
    //     let important = {};
    //     Object.values(this.projects).forEach(project => {
    //         Object.values(project.tasks).forEach(task => {
    //             if(task.getInfo().priority === "important"){
    //                 important[task.getInfo().title] = task;
    //             }
    //         });
    //     });
    //     return important;
    // },


    // sortByState: function(){
    //     let done = {};
    //     let todo = {};
    //     Object.values(this.projects).forEach(project => {
    //         Object.values(project.tasks).forEach(task => {
    //             if(task.getInfo().state === "to-do"){
    //                 todo[task.getInfo().title] = task;
    //             } else {
    //                 done[task.getInfo().title] = task;
    //             }
    //         });
    //     });
    //     return {done, todo};
    // },
    


    // sortByDate: function(){
    //     let today = {}
    //     let week = {}
    //     for(project of this.projects){
    //         for(task of project){
    //             if(task.getInfo().dueDate === "Today"){
    //                 today[task.getInfo().title] = task
    //             }
    //             else if(task.getInfo().dueDate === "This week"){
    //                 week[task.getInfo().title] = task
    //             }
    //         }
    //     }

    //     return {today, week}
    // },

 }




  // Creating Tasks
const task1 = createTask("Task 1", "Description 1", "2022-01-01", "High");
const task2 = createTask("Task 2", "Description 2", "2022-02-02", "Medium");

// Testing Task Creation
console.assert(task1.getInfo().title === "Task 1", "Task 1 creation failed");
console.assert(task2.getInfo().title === "Task 2", "Task 2 creation failed");

// Creating Projects
const project1 = createProject("Project 1", "#");
const project2 = createProject("Project 2", "$");

// Testing Project Creation
console.assert(project1.getProjectInfo().projectTitle === "Project 1", "Project 1 creation failed");
console.assert(project2.getProjectInfo().projectTitle === "Project 2", "Project 2 creation failed");

// Adding Tasks to Projects
project1.addTask(task1);
project2.addTask(task2);

// Testing Adding Tasks to Projects
console.assert(project1.tasks[task1.getInfo().title] === task1, "Adding task1 to project1 failed");
console.assert(project2.tasks[task2.getInfo().title] === task2, "Adding task2 to project2 failed");

// Modifying Tasks within Projects
project1.modifyTask(task1, "Task 1 Modified", "Updated Description 1", "2022-03-03", "Low");
console.assert(project1.tasks["Task 1 Modified"] !== undefined, "Modifying task1 within project1 failed");


// Deleting Tasks from Projects
project1.deleteTask(task1);
console.assert(project1.tasks["Task 1 Modified"] === undefined, "Deleting task1 from project1 failed");


// Adding a Project to theGodContainerOfTheUniverse
theGodContainerOfTheUniverse.addProject(project1);
console.assert(theGodContainerOfTheUniverse.projects["Project 1"] === project1, "Adding project1 to theGodContainerOfTheUniverse failed");

// Modifying a Project in theGodContainerOfTheUniverse
theGodContainerOfTheUniverse.modifyProject(project1, "Project 1 Updated", "");
console.assert(theGodContainerOfTheUniverse.projects["Project 1 Updated"].getProjectInfo().projectSymbol === "", "Modifying project1 in theGodContainerOfTheUniverse failed");

// Removing a Project from theGodContainerOfTheUniverse
theGodContainerOfTheUniverse.removeProject(project1);
console.assert(theGodContainerOfTheUniverse.projects["Project 1 Updated"] === undefined, "Removing project1 from theGodContainerOfTheUniverse failed");

// Re-adding the Project and Task for Further Testing
theGodContainerOfTheUniverse.addProject(project1);

// Adding a Task to a Project through theGodContainerOfTheUniverse
theGodContainerOfTheUniverse.addTaskToProject(project1, task1);
console.assert(project1.tasks[task1.getInfo().title] === task1, "Adding task1 to project1 through theGodContainerOfTheUniverse failed");


// Removing a Task from a Project through theGodContainerOfTheUniverse
theGodContainerOfTheUniverse.removeTaskFromProject(project1, task1);

console.assert(project1.tasks[task1.getInfo().title] === undefined, "Removing task1 from project1 through theGodContainerOfTheUniverse failed");

// // Getting Task Info from a Project through

theGodContainerOfTheUniverse.addTaskToProject(project1, task1); // Re-add task for testing
const taskInfo = theGodContainerOfTheUniverse.getTaskInfoFromProject(project1, task1);
console.assert(taskInfo && taskInfo.title === task1.getInfo().title, "Getting task info from project1 through theGodContainerOfTheUniverse failed");

console.log("All tests completed.");
