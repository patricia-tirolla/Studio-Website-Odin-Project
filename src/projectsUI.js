import { Project, projectList, addNewProjectToProjectList } from "./projects";

export function createNewProjectCard() {
    let projectsContainer = document.getElementById("projects-container");
    projectsContainer.innerHTML = "";


    projectList.forEach((project) => {

    
    const projectTemplate = document.querySelector("project.template");
    let clone = projectTemplate.conten.cloneNode(true);

    // Unfinished - interact with the template

    })
}