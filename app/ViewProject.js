class ViewProject {
  constructor() {
    this.html = document.getElementById("html-projectView").innerHTML;
    this.project = null;
  }

  initializeProject(project) {
    this.project = project;
  }

  render() {
    document.getElementById("page").innerHTML = this.html;

    document.getElementById("project-name-title").innerHTML = this.project.projectName;

    document.getElementById("project-view").innerHTML =
      document.getElementById("project-view").innerHTML
        .replace("{project-author}", this.project.author)
        .replace("{project-description}", this.project.description)
        .replace("{project-technologies-list}", this.project.projectTechnologiesList)
        .replace("{project-link}", this.project.projectLink);
  }
}
