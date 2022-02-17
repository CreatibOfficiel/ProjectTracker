class Recipe {
  constructor(recipeName, recipeCookingTime, recipeBakingTime, recipeIngredientsList, recipeStepsList, id = null) {
    this.recipeName = recipeName;
    this.recipeCookingTime = recipeCookingTime;
    this.recipeBakingTime = recipeBakingTime;
    this.recipeIngredientsList = recipeIngredientsList;
    this.recipeStepsList = recipeStepsList;
    this.id = id;
  }
}
