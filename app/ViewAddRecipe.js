class ViewAddRecipe {
  constructor() {
    this.html = document.getElementById("html-addingView").innerHTML;
    this.addRecipe = null;
  }

  initializeAddRecipe(addRecipe) {
    this.addRecipe = addRecipe;
  }

  render() {
    document.getElementById("page").innerHTML = this.html;
    document.getElementById("adding-form").addEventListener("submit", evenement => this.save(evenement));
  }

  save(evenement) {
    evenement.preventDefault();

    let name = document.getElementById("recipe-name").value;
    let cooking = document.getElementById("recipe-cooking-time").value;
    let baking = document.getElementById("recipe-baking-time").value;
    let ingredients = document.getElementById("recipe-ingredients-list").value;
    let steps = document.getElementById("recipe-steps-list").value;

    this.addRecipe(new Project(name, cooking, baking, ingredients, steps, null));

  }
}
