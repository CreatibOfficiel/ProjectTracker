class ProjectDAO {
    getAll(action) {
        console.log(apiUrl.getAll)
        fetch(apiUrl.getAll)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let listProject = [];
                for (let position in data) {
                    let project = new Project(data[position].projectName,
                        data[position].author,
                        data[position].description,
                        data[position].projectTechnologiesList,
                        data[position].projectLink,
                        data[position].id);

                    console.log(project);
                    listProject.push(project);
                }
                action(listProject);
            });
    }

    getById(id, action) {
        fetch(apiUrl.getById + "?id=" + id)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let project = new Project(data.projectName,
                    data.author,
                    data.description,
                    data.projectTechnologiesList,
                    data.projectLink,
                    data.id);
                action(project);
            });
    }


    add(project, action) {
        console.log(JSON.stringify(project));
        fetch(apiUrl.add,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: "projectjson=" + JSON.stringify(project),
                mode: 'cors',
            })
            .then(response => response.text())
            .then(data => {
                console.log('Détail:', data);
                action();
            });
    }
}

/*
class CadeauDAO{
  //cd /opt/bitnami/apache2/logs/
  constructor(){
    this.URL = 'http://3.229.104.111/'
  }

  lister(action){
    fetch(this.URL + 'List.php')
      .then(response => response.text())
      .then(data =>
        {
          console.log(data);
          data = data == null ? null : JSON.parse(data)
          let listeCadeau = [];
          for(let position in data){
            let cadeau = new Cadeau(data[position].nom,
                                    data[position].marque,
                                    data[position].description,
                                    data[position].id);

            console.log(cadeau);
            listeCadeau.push(cadeau);
          }
          action(listeCadeau);
        });
  }

  chercher(id, action){
    fetch(this.URL + 'SearchById.php' + '?id=' + id)
      .then(response => response.json())
      .then(data =>
        {
          console.log(data);
          let cadeau = new Cadeau(data.nom,
                                  data.marque,
                                  data.description,
                                  data.id);
          action(cadeau);
        });
  }

  ajouter(cadeau, action){
    fetch(this.URL + 'Add.php',
      {
        method: 'POST',
        headers: {
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(cadeau),
      })
      .then(response => response.text())
      .then(data =>
        {
          console.log('Détail:', data);
          action();
        });
  }
}
 */
