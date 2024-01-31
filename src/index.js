import "./style.css"
import {createTask, createProject, theGodContainerOfTheUniverse} from "./logic"
import {dom} from "./dom"
import { storage } from "./storage"
import { format, addDays } from "date-fns"

document.addEventListener('DOMContentLoaded', function() {
    if(localStorage.length < 1){
       
        const today = new Date();
        const todayFormatted = format(today, "yyyy/MM/dd");
        const twoDaysAfter = addDays(today, 2);
        const formattedTwoDaysAfter = format(twoDaysAfter, "yyyy-MM-dd");

        const codingProject = createProject("Coding", "💻");
        const gymProject = createProject("Gym", "🥊");

        const chillCode = createTask("Code while chilling in the nature", "Finish todo-list", formattedTwoDaysAfter, "important");
        const hitGym = createTask("Hit the bars real hard", "Chest day", todayFormatted, "medium", "done");

        theGodContainerOfTheUniverse.addProject(codingProject);
        theGodContainerOfTheUniverse.addProject(gymProject);
        theGodContainerOfTheUniverse.addTaskToProject("Coding", chillCode);
        theGodContainerOfTheUniverse.addTaskToProject("Gym", hitGym);

        
        storage.storeInfo(); 
    }
});

window.addEventListener("load", () => {
    storage.updateBackend()
    storage.displayContent()
})

dom.addEventListeners()
dom.showProjectsInSidebar()