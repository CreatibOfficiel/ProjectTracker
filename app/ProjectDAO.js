class ProjectDAO {
    constructor(){
        this.URL = 'http://18.235.111.182/'
    }

    getAll(action){
        fetch(this.URL + 'list.php')
            .then(response => response.text())
            .then(data =>
            {
                console.log(data);
                data = data == null ? null : JSON.parse(data)
                let listProject = [];
                for(let position in data){
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

    getById(id, action){
        fetch(this.URL + 'search-by-id.php' + '?id=' + id)
            .then(response => response.json())
            .then(data =>
            {
                let project = new Project(data.projectName,
                    data.author,
                    data.description,
                    data.projectTechnologiesList,
                    data.projectLink,
                    data.id);
                action(project);
            });
    }

    add(project, action){
        fetch(this.URL + 'add.php',
            {
                method: 'POST',
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(project),
            })
            .then(response => response.text())
            .then(data =>
            {
                console.log('Détail:', data);
                action();
            });
    }
}
