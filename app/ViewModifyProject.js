class ViewModifyProject {
  constructor() {
    this.html = document.getElementById("html-modifyView").innerHTML;
    this.modifyProject = null;
  }

  initializeModifyProject(newProject) {
    this.modifyProject = newProject;
  }

  render(project) {
    document.getElementById("page").innerHTML = this.html;
    document.getElementById("modifying-form").addEventListener("submit", evenement => this.save(evenement));

    console.log(project);
    document.getElementById("modifying-form").innerHTML =
      document.getElementById("modifying-form").innerHTML
        .replace("{project-name}", this.modifyProject.project_name)
        .replace("{project-author}", this.modifyProject.project_author)
        .replace("{project-description}", this.modifyProject.project_description)
        .replace("{project-technology}", this.modifyProject.project_tech)
        .replace("{project-link}", this.modifyProject.project_link);
  }

  save(evenement) {
    evenement.preventDefault();

    let name = document.getElementById("project-name").value;
    let author = document.getElementById("project-author").value;
    let description = document.getElementById("project-description").value;
    let technology = document.getElementById("project-technology").value;
    let link = document.getElementById("project-link").value;

    let p = new Project(name, author, description, technology, link, null);
    console.log(p);
    //this.modifyProject(p);
  }
}
