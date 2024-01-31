import "./style.css"
import {createTask, createProject, theGodContainerOfTheUniverse} from "./logic"
import {dom} from "./dom"
import { storage } from "./storage"




//   // Creating Tasks
// const task1 = createTask("Task 1", "Description 1", "2022-01-01", "High");
// const task2 = createTask("Task 2", "Description 2", "2022-02-02", "Medium");

// // Testing Task Creation
// console.assert(task1.getInfo().title === "Task 1", "Task 1 creation failed");
// console.assert(task2.getInfo().title === "Task 2", "Task 2 creation failed");

// // Creating Projects
// const project1 = createProject("Project 1", "$");
// const project2 = createProject("Project 2", "$");

// // Testing Project Creation
// console.assert(project1.getProjectInfo().projectTitle === "Project 1", "Project 1 creation failed");
// console.assert(project2.getProjectInfo().projectTitle === "Project 2", "Project 2 creation failed");

// // Adding Tasks to Projects
// project1.addTask(task1);
// project2.addTask(task2);

// // Testing Adding Tasks to Projects
// console.assert(project1.tasks[task1.getInfo().title] === task1, "Adding task1 to project1 failed");
// console.assert(project2.tasks[task2.getInfo().title] === task2, "Adding task2 to project2 failed");

// // Modifying Tasks within Projects
// project1.modifyTask("Task 1", "Task 1 Modified", "Updated Description 1", "2022-03-03", "Low");
// console.assert(project1.tasks["Task 1 Modified"] !== undefined, "Modifying task1 within project1 failed");


// // Deleting Tasks from Projects
// project1.deleteTask("Task 1 Modified");
// console.assert(project1.tasks["Task 1 Modified"] === undefined, "Deleting task1 from project1 failed");


// // Adding a Project to theGodContainerOfTheUniverse
// theGodContainerOfTheUniverse.addProject(project1);
// console.assert(theGodContainerOfTheUniverse.projects["Project 1"] === project1, "Adding project1 to theGodContainerOfTheUniverse failed");

// // Modifying a Project in theGodContainerOfTheUniverse
// theGodContainerOfTheUniverse.modifyProject("Project 1", "Project 1 Updated", "");
// console.assert(theGodContainerOfTheUniverse.projects["Project 1 Updated"].getProjectInfo().projectSymbol === "", "Modifying project1 in theGodContainerOfTheUniverse failed");

// console.log(theGodContainerOfTheUniverse.projects["Project 1 Updated"].projectTitle)
// // Removing a Project from theGodContainerOfTheUniverse
// theGodContainerOfTheUniverse.removeProject("Project 1 Updated");
// console.assert(theGodContainerOfTheUniverse.projects["Project 1 Updated"] === undefined, "Removing project1 from theGodContainerOfTheUniverse failed");


// // Re-adding the Project and Task for Further Testing
// theGodContainerOfTheUniverse.addProject(project1);
// theGodContainerOfTheUniverse.addProject(project2)

// // Adding a Task to a Project through theGodContainerOfTheUniverse
// theGodContainerOfTheUniverse.addTaskToProject("Project 1 Updated", task1);
// console.assert(project1.tasks[task1.getInfo().title] === task1, "Adding task1 to project1 through theGodContainerOfTheUniverse failed");


// console.log(theGodContainerOfTheUniverse)
// // // Removing a Task from a Project through theGodContainerOfTheUniverse
// // theGodContainerOfTheUniverse.removeTaskFromProject("Project 1 Updated", 'Task 1 Modified');
// // console.assert(project1.tasks[task1.getInfo().title] === undefined, "Removing task1 from project1 through theGodContainerOfTheUniverse failed");

// // // Getting Task Info from a Project through

// console.log("task1",task1)
// theGodContainerOfTheUniverse.addTaskToProject(project1, task1); // Re-add task for testing

// const taskInfo = theGodContainerOfTheUniverse.getTaskInfoFromProject("Project 1 Updated", "Task 1");
// console.assert(taskInfo && taskInfo.title === task1.getInfo().title, "Getting task info from project1 through theGodContainerOfTheUniverse failed");



// theGodContainerOfTheUniverse.modifyTaskFromProject("Project 1", "Task 1","Task 1 Modified", "Updated Description 1", "2024-01-20", "important")

// let task3 = createTask("Task 3", "Description 3", "2024-01-17", "important")
// theGodContainerOfTheUniverse.addTaskToProject("Project 1", task3)
// console.log(task1.getInfo().dueDate)

window.addEventListener("load", () => {
    storage.updateBackend()
    storage.displayContent()
})

dom.addEventListeners()
dom.showProjectsInSidebar()




// // const button = document.querySelector("#all")
// // button.addEventListener("click", () => {
// //     const mainContainer = document.querySelector('.main-content');

// //     while(mainContainer.firstChild){
// //     mainContainer.removeChild()
// //     }
// // })



