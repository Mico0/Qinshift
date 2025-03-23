import Recipe from "../schemas/recipe.schema.js"; //! import the schema

export default class RecipeModel {
  static async getAll() {
    const data = Recipe.find({});
    return data;
  }

  static async getById(id) {
    const recipe = Recipe.findById(id);
    return recipe;
  }

  static async create(data) {
    const newRecipe = Recipe.create(data);
    return newRecipe;
  }

  static async update(id, data) {
    const recipe = await Recipe.findById(id);

    if (!recipe) {
      throw new Error("Recipe not found");
    }

    recipe.set(data);

    await recipe.save();

    return recipe;
  }

  static async delete(id) {
    const recipe = await Recipe.findById(id);

    if (!recipe) {
      throw new Error("Recipe not found");
    }

    await recipe.deleteOne();
    //! Correct way to delete a document
    return { message: "Recipe deleted successfully" };
  }

  static async findVegetarian() {
    const vegetarianRecipes = Recipe.find({ isVegetarian: true });
    return vegetarianRecipes;
  }

  static async findTitle(recipeTitle) {
    const foundRecipes = Recipe.find({ title: recipeTitle });
    return foundRecipes;
  }
}
