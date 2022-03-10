class ProjectDAO {
    constructor() {
        this.URL = 'http://54.161.121.202/';
    }

    getAll(action) {
        fetch(this.URL + 'list.php')
            .then(response => response.text())
            .then(data => {
                console.log(data);
                data = data == null ? null : JSON.parse(data)
                let listProject = [];
                for (let position in data) {
                    let project = new Project(
                        data[position].name,
                        data[position].author,
                        data[position].description,
                        data[position].technology,
                        data[position].link,
                        data[position].id);

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
                    data.name,
                    data.author,
                    data.description,
                    data.technology,
                    data.link,
                    data.id);
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

    modify(project, action) {
        console.log(project);
        fetch(this.URL + 'modify.php',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(project),
            })
            .then(response => response.text())
            .then(data => {
                action();
            });
    }
}
