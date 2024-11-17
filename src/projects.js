export const projectList = [];

export function Project(title, skills, author ) {
    this.title = title,
    this.skills = skills,
    this.author = author
}

export function addNewProjectToProjectList() {
    projectList.push(new Project(title, skills, author))
}
