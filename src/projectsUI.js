import {projectList,  } from "./projects";


export function displayProjects() {
    let projectsContainer = document.querySelector(".projects-container");
    
    projectList.forEach((project) => {

    
    const projectTemplate = document.querySelector(".project-template");
    let clone = projectTemplate.content.cloneNode(true);
    
    clone.querySelector(".project-title").textContent = project.title;
    clone.querySelector(".author").textContent = project.author;
    clone.querySelector(".preview-link").setAttribute('href', project.previewLink); 
    clone.querySelector(".code-link").setAttribute('href', project.codeLink);
    clone.querySelector(".project-cell").style.backgroundImage = `url(${project.picture})`;

    projectsContainer.appendChild(clone);
    })

}