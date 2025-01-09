function populateRecipe() {
  let name = prompt("Enter a name for the recipe: ");
  let ingredientsLength = parseInt(
    prompt("Enter how many ingredients will this recipe have: ")
  );
  let ingredients = [];

  for (let i = 0; i < ingredientsLength; i++) {
    let ingredient = prompt("Enter the name of the ingredient: ");
    ingredients.push(ingredient);
  }
  updateList(name, ingredients);
}

let resultDiv = document.getElementById("result");

function updateList(recipe_name, recipe_ingredients) {
  resultDiv.innerHTML += `<h2> ${recipe_name}`;
  resultDiv.innerHTML += "<ul>";
  for (ingredient of recipe_ingredients) {
    resultDiv.innerHTML += `<li>${ingredient}</li>`;
  }

  resultDiv.innerHTML += "<ul>";
}

let recipe = document
  .getElementsByTagName("button")[0]
  .addEventListener("click", populateRecipe);
