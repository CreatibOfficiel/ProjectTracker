class ProjectDAO {
    constructor() {
        this.URL = 'http://54.161.121.202/'
    }

    getAll(action) {
        fetch(this.URL + 'list.php')
            .then(response => response.text())
            .then(data => {
                console.log(data);
                data = data == null ? null : JSON.parse(data)
                let listProject = [];
                for (let position in data) {
                    let project = new Project(data[position].project_name,
                        data[position].project_author,
                        data[position].project_description,
                        data[position].project_tech,
                        data[position].project_link,
                        data[position].project_id);

                    console.log(project);
                    listProject.push(project);
                }
                action(listProject);
            });
    }

    getById(id, action) {
        fetch(this.URL + 'search-by-id.php' + '?project_id=' + id)
            .then(response => response.json())
            .then(data => {
                let project = new Project(
                    data.project_name,
                    data.project_author,
                    data.project_description,
                    data.project_tech,
                    data.project_link,
                    data.project_id);
                action(project);
            });
    }

    add(project, action) {
        fetch(this.URL + 'add.php',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(project),
            })
            .then(response => response.text())
            .then(data => {
                console.log('Détail:', data);
                action();
            });
    }
}
