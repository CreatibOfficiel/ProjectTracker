class Project {
  constructor(projectName, author, description, projectTechnologiesList, projectLink, id = null) {
    this.projectName = projectName;
    this.author = author;
    this.description = description;
    this.projectTechnologiesList = projectTechnologiesList;
    this.projectLink = projectLink;
    this.id = id;
  }
}
