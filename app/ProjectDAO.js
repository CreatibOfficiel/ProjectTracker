class ProjectDAO {
    getAll(action) {
        console.log(apiUrl.getAll)
        fetch(apiUrl.getAll)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let listRecipe = [];
                for (let position in data) {
                    let recipe = new Project(data[position].recipeName,
                        data[position].recipeCookingTime,
                        data[position].recipeBakingTime,
                        data[position].recipeIngredientsList,
                        data[position].recipeStepsList,
                        data[position].id);

                    console.log(recipe);
                    listRecipe.push(recipe);
                }
                action(listRecipe);
            });
    }

    getById(id, action) {
        fetch(apiUrl.getById + "?id=" + id)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let recipe = new Project(data.recipeName,
                    data.recipeCookingTime,
                    data.recipeBakingTime,
                    data.recipeIngredientsList,
                    data.recipeStepsList,
                    data.id);
                action(recipe);
            });
    }


    add(recipe, action) {
        console.log(JSON.stringify(recipe));
        fetch(apiUrl.add,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: "recipejson=" + JSON.stringify(recipe),
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
