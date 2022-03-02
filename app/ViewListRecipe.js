class ViewListRecipe {
  constructor() {
    this.html = document.getElementById("html-listView").innerHTML;
    this.listRecipeGiven = null;
  }

  initializeListRecipe(listRecipeGiven) {
    this.listRecipeGiven = listRecipeGiven;
  }

  render() {
    document.getElementById("page").innerHTML = this.html;

    let listRecipe = document.getElementById("recipe-list");
    const listRecipeHTML = listRecipe.innerHTML;
    let listRecipeHTMLReplacement = "";

    for (var numberRecipe in this.listRecipeGiven) {
      let listRecipeItemHTMLReplacement = listRecipeHTML;
      listRecipeItemHTMLReplacement = listRecipeItemHTMLReplacement.replace("{Project.id}", this.listRecipeGiven[numberRecipe].id);
      listRecipeItemHTMLReplacement = listRecipeItemHTMLReplacement.replace("{Project.name}", this.listRecipeGiven[numberRecipe].recipeName);
      listRecipeHTMLReplacement += listRecipeItemHTMLReplacement;
    }

    listRecipe.innerHTML = listRecipeHTMLReplacement;
  }
}
