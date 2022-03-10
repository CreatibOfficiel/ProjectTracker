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

    document.getElementById("project-name-title").innerHTML = this.project.project_name;

    document.getElementById("page").innerHTML =
      document.getElementById("page").innerHTML
        .replace("{project-author}", this.project.project_author)
        .replace("{project-description}", this.project.project_description)
        .replace("{project-technology}", this.project.project_tech)
        .replace("{project-link}", this.project.project_link)
        .replace("{project-id}", this.project.project_id);
  }
}
