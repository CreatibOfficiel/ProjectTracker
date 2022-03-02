class Application {
  constructor(window, viewListRecipe, viewRecipe, viewAddRecipe, recipeDAO) {
    this.window = window;

    this.viewListRecipe = viewListRecipe;

    this.viewRecipe = viewRecipe;
    this.viewAddRecipe = viewAddRecipe;
    this.viewAddRecipe.initializeAddRecipe(recipe => this.addRecipe(recipe));

    this.recipeDAO = recipeDAO;

    this.window.addEventListener("hashchange", () => this.dispatch());

    this.dispatch();
  }

  dispatch() {
    let hash = window.location.hash;

    if (!hash) {

      this.recipeDAO.getAll((listRecipe) => this.showNewListRecipe(listRecipe));

    } else if (hash.match(/^#adding/)) {

      this.viewAddRecipe.render();

    } else {
      let navigation = hash.match(/^#recipe\/([0-9]+)/);
      let idRecipe = navigation[1];

      this.recipeDAO.getById(idRecipe, (recipe) => this.showNewRecipe(recipe));
    }
  }

  showNewListRecipe(listRecipe) {
    console.log(listRecipe);
    this.viewListRecipe.initializeListRecipe(listRecipe);
    // document.getElementById("loader").style.display = "none";
    this.viewListRecipe.render();
  }

  showNewRecipe(recipe) {
    console.log(recipe);
    this.viewRecipe.initializeRecipe(recipe);
    this.viewRecipe.render();
  }

  addRecipe(recipe) {
    this.recipeDAO.add(recipe, () => this.showListRecipe());
  }

  showListRecipe() {
    this.window.location.hash = "#";
  }
}

new Application(window, new ViewListRecipe(), new ViewRecipe(), new ViewAddRecipe(), new ProjectDAO());

