class RecipeDAO {
    getAll(action) {
        console.log(apiUrl.getAll)
        fetch(apiUrl.getAll)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let listRecipe = [];
                for (let position in data) {
                    let recipe = new Recipe(data[position].recipeName,
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
                let recipe = new Recipe(data.recipeName,
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
