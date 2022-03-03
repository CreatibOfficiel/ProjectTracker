class Application {
  constructor(window, viewListProject, viewProject, viewAddProject, projectDAO) {
    this.window = window;

    this.viewListProject = viewListProject;

    this.viewProject = viewProject;
    this.viewAddProject = viewAddProject;
    this.viewAddProject.initializeAddProject(project => this.addProject(project));

    this.projectDAO = projectDAO;

    this.window.addEventListener("hashchange", () => this.dispatch());

    this.dispatch();
  }

  dispatch() {
    let hash = window.location.hash;

    if (!hash) {

      this.projectDAO.getAll((listProject) => this.showNewListProject(listProject));

    } else if (hash.match(/^#adding/)) {

      this.viewAddProject.render();

    } else {
      let navigation = hash.match(/^#project\/([0-9]+)/);
      let idProject = navigation[1];

      this.projectDAO.getById(idProject, (project) => this.showNewProject(project));
    }
  }

  showNewListProject(listProject) {
    console.log(listProject);
    this.viewListProject.initializeListProject(listProject);
    // document.getElementById("loader").style.display = "none";
    this.viewListProject.render();
  }

  showNewProject(project) {
    console.log(project);
    this.viewProject.initializeProject(project);
    this.viewProject.render();
  }

  addProject(project) {
    this.projectDAO.add(project, () => this.showListProject());
  }

  showListProject() {
    this.window.location.hash = "#";
  }
}

new Application(window, new ViewListProject(), new ViewProject(), new ViewAddProject(), new ProjectDAO());

