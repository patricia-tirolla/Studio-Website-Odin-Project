import {projectList,  } from "./projects";

export function displayProjects() {
    let projectsContainer = document.getElementById("projects-section");
    
    projectList.forEach((project) => {

    
    const projectTemplate = document.querySelector(".project-template");
    let clone = projectTemplate.content.cloneNode(true);
    
    clone.querySelector("h1").textContent = project.title;
    clone.querySelector(".author").textContent = project.author;
    clone.querySelector(".preview-link").setAttribute('href', project.previewLink); 
    clone.querySelector(".code-link").setAttribute('href', project.codeLink);

    for (let skill of project.skills) {
        let spanCreation = document.createElement("span");
        spanCreation.textContent = skill;
        clone.querySelector(".project-skills-container").appendChild(spanCreation);
    }

    projectsContainer.appendChild(clone);
    })

}