import "./style.css"



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
        let taskTitle = task.getInfo().title
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

    const getAllProjectTasks = () => {
        return tasks
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
 
 
   
    return {addTask, deleteTask, modifyTask, getTaskInfo, changeProjectTitle, changeProjectSymbol, getProjectInfo, getAllProjectTasks}
 }
 
 
 
 
 
 
 let theGodContainerOfTheUniverse = {
    projects: {},
   
    addProject: function(project){
        this.projects[project.getProjectInfo().title] = project
    },
 
 
    removeProject: function(projectTitle){
        delete this.projects[projectTitle];
    },
 
 
    modifyProject: function(currentTitle, newTitle, newSymbol){
        this.projects[currentTitle].changeProjectTitle(newTitle).changeProjectSymbol(newSymbol)
    },
 
 
    addTaskToProject: function(project, task){
        this.projects[project.getProjectInfo().title].addTask(task)
    },
 
 
    removeTaskFromProject: function(projectTitle, taskTitle){
        delete this.projects[projectTitle][taskTitle]
    },
 
 
    getTaskInfoFromProject: function(projectTitle, taskTitle){
        this.projects[projectTitle].getTaskInfo(taskTitle)
    },
 
 
    modifyTaskFromProject: function(projectTitle, currentTaskTitle, newTitle, newDescription, newDueDate, newPriority){
        this.projects[projectTitle].modifyTask(currentTaskTitle,newTitle, newDescription, newDueDate, newPriority)
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
    


    sortByDate: function(){
        let today = {}
        let week = {}
        for(project of this.projects){
            for(task of project){
                if(task.getInfo().dueDate === "Today"){
                    today[task.getInfo().title] = task
                }
                else if(task.getInfo().dueDate === "This week"){
                    week[task.getInfo().title] = task
                }
            }
        }

        return {today, week}
    },

 }
 






// Step 1: Create Tasks
let task1 = createTask("Task 1", "Description 1", "2024-01-15", "High");
let task2 = createTask("Task 2", "Description 2", "2024-01-20", "Medium");

// Step 2: Create Projects
let project1 = createProject("Project Alpha", "A");
let project2 = createProject("Project Beta", "B");

// Step 3: Add Tasks to Projects

// Step 4: Manipulate Tasks and Projects
// Modify task1
task1.changeDescription("Updated Description for Task 1");
task1.changePriority("Low");

// Remove task2 from project1


// Change project1 title
project1.changeProjectTitle("Project Alpha Updated");

// Step 5: Add Projects to the Main Container
theGodContainerOfTheUniverse.addProject(project1);
theGodContainerOfTheUniverse.addProject(project2);


theGodContainerOfTheUniverse.addTaskToProject(project1, task1)


project1.addTask(task1);
project1.addTask(task2);

project1.deleteTask("Task 2");

// Step 6: Perform Other Actions
// Get task info
console.log("Task 1 Info:", task1.getInfo());

// Get project info
console.log("Project Alpha Info:", project1.getProjectInfo());
console.log("Task info from project", project1.getTaskInfo("Task 1"))
console.log(project1.getAllProjectTasks())

// Assuming you have implemented sorting
// console.log("Sorted by Priority:", theGodContainerOfTheUniverse.getImportantTasks());
// console.log(theGodContainerOfTheUniverse.sortByState())

