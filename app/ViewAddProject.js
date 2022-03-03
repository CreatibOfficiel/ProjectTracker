class ViewAddProject {
  constructor() {
    this.html = document.getElementById("html-addingView").innerHTML;
    this.addProject = null;
  }

  initializeAddProject(addProject) {
    this.addProject = addProject;
  }

  render() {
    document.getElementById("page").innerHTML = this.html;
    document.getElementById("adding-form").addEventListener("submit", evenement => this.save(evenement));
  }

  save(evenement) {
    evenement.preventDefault();

    let name = document.getElementById("project-name").value;
    let author = document.getElementById("author").value;
    let description = document.getElementById("description").value;
    let technologies = document.getElementById("project-technologies-list").value;
    let link = document.getElementById("project-link").value;

    this.addProject(new Project(name, author, description, technologies, link, null));

  }
}
