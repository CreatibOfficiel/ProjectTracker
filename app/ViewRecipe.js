class ViewRecipe {
  constructor() {
    this.html = document.getElementById("html-recipeView").innerHTML;
    this.recipe = null;
  }

  initializeRecipe(recipe) {
    this.recipe = recipe;
  }

  render() {
    document.getElementById("page").innerHTML = this.html;

    document.getElementById("recipe-name-title").innerHTML = this.recipe.recipeName;

    document.getElementById("recipe-view").innerHTML =
      document.getElementById("recipe-view").innerHTML
        .replace("{cooking-time}", this.recipe.recipeCookingTime)
        .replace("{baking-time}", this.recipe.recipeBakingTime)
        .replace("{ingredients-list}", this.recipe.recipeIngredientsList)
        .replace("{steps-list}", this.recipe.recipeStepsList);
  }
}
