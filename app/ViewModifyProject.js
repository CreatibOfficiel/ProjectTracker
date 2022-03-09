class ViewModifyProject {
  constructor() {
    this.html = document.getElementById("html-modifyView").innerHTML;
    this.modifyProject = null;
  }

  initializeModifyProject(modifyProject) {
    this.modifyProject = modifyProject;
  }

  render() {
    document.getElementById("page").innerHTML = this.html;
    document.getElementById("modifying-form").addEventListener("submit", evenement => this.save(evenement));
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
