import { createProject, createTask, theGodContainerOfTheUniverse } from "./logic";
import {dom} from "./dom"

let storage = {
    storageAvailable: function(){
        let storage;
        try {
            storage = window["localStorage"];
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
                e instanceof DOMException &&
                // everything except Firefox
                (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage &&
                storage.length !== 0
            );
        }
    },
    storeInfo: function(){
        if(this.storageAvailable()){
            localStorage.clear()
            const info = JSON.stringify(theGodContainerOfTheUniverse.projects);
            localStorage.setItem("projects", info)
        } 
    },
    getInfo: function(){
        const info = JSON.parse(localStorage.getItem("projects"))
        return info;
    },
    updateBackend: function(){
        if(this.storageAvailable()){
            if(localStorage.getItem("projects")){
                const info = this.getInfo()
                Object.values(info).forEach((project) => {
                    let newProject = createProject(project.projectTitle, project.projectSymbol)
                    theGodContainerOfTheUniverse.addProject(newProject)
                    Object.values(project.tasks).forEach((task) => {
                        let newTask = createTask(task.title, task.description, task.dueDate, task.priority, task.state)
                        theGodContainerOfTheUniverse.addTaskToProject(project.projectTitle, newTask)
                    })
                }
                )
            }
        } 
    },
    displayContent: function(){
        dom.showProjectsInSidebar()
        const buttonAll = document.querySelector("#all")
        buttonAll.click();
    }
}


export{storage}



  