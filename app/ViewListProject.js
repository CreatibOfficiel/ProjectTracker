﻿class ViewListProject {
  constructor() {
    this.html = document.getElementById("html-listView").innerHTML;
    this.listProjectGiven = null;
  }

  initializeListProject(listProjectGiven) {
    this.listProjectGiven = listProjectGiven;
  }

  render() {
    document.getElementById("page").innerHTML = this.html;

    let listProject = document.getElementById("project-list");
    const listProjectHTML = listProject.innerHTML;
    let listProjectHTMLReplacement = "";

    for (var numberProject in this.listProjectGiven) {
      let listProjectItemHTMLReplacement = listProjectHTML;
      listProjectItemHTMLReplacement = listProjectItemHTMLReplacement.replace("{Project.id}", this.listProjectGiven[numberProject].project_id);
      listProjectItemHTMLReplacement = listProjectItemHTMLReplacement.replace("{Project.name}", this.listProjectGiven[numberProject].project_name);
      listProjectHTMLReplacement += listProjectItemHTMLReplacement;
    }

    listProject.innerHTML = listProjectHTMLReplacement;
  }
}
