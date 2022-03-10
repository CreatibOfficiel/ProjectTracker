class ViewModifyProject {
  constructor() {
    this.html = document.getElementById("html-modifyView").innerHTML;
    this.modifyProject = null;
    this.projectId = null;
  }

  initializeModifyProject(newProject) {
    this.modifyProject = newProject;
  }

  render(project) {
    this.projectId = project.project_id;

    document.getElementById("page").innerHTML = this.html;
    document.getElementById("modifying-form").addEventListener("submit", evenement => this.save(evenement));

    document.getElementById("modifying-form").innerHTML =
      document.getElementById("modifying-form").innerHTML
        .replace("{project-name}", project.project_name)
        .replace("{project-author}", project.project_author)
        .replace("{project-description}", project.project_description)
        .replace("{project-technology}", project.project_tech)
        .replace("{project-link}", project.project_link);
  }

  save(evenement) {
    evenement.preventDefault();

    let name = document.getElementById("project-name").value;
    let author = document.getElementById("project-author").value;
    let description = document.getElementById("project-description").value;
    let technology = document.getElementById("project-technology").value;
    let link = document.getElementById("project-link").value;

    let p = new Project(name, author, description, technology, link, this.projectId);
    console.log(p);
    this.modifyProject(p);
  }
}
