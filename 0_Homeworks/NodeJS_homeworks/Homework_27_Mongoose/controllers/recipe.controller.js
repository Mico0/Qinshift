import RecipeService from "../services/Recipe.js";
import Recipe from "../schemas/recipe.schema.js";

export default class RecipeController {
  static async getAll(req, res) {
    try {
      const movies = await RecipeService.getAll();
      res.status(200).send(movies);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async getRecipe(req, res) {
    try {
      const recipe = await RecipeService.getById(req.params.id);
      res.status(200).send(recipe);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async createRecipe(req, res) {
    try {
      const {
        title,
        description,
        ingredients,
        instructions,
        cookingTime,
        difficulty,
        isVegetarian,
        category,
      } = req.body;
      const newRecipe = {
        title,
        description,
        ingredients,
        instructions,
        cookingTime,
        difficulty,
        isVegetarian,
        category,
      };

      res.status(201).send(await RecipeService.create(newRecipe));
      return newRecipe;
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async updateRecipe(req, res) {
    try {
      const {
        title,
        description,
        ingredients,
        instructions,
        cookingTime,
        difficulty,
        isVegetarian,
        category,
      } = req.body;

      const updatedRecipe = {
        title,
        description,
        ingredients,
        instructions,
        cookingTime,
        difficulty,
        isVegetarian,
        category,
      };

      res
        .status(200)
        .send(await RecipeService.update(req.params.id, updatedRecipe));
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async deleteRecipe(req, res) {
    try {
      const recipe = await RecipeService.getById(req.params.id);
      res.status(200).send(await RecipeService.delete(recipe));
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async filterCategory(req, res) {
    try {
      const recipes = await RecipeService.getAll();
      const filteredRecipes = recipes.filter(
        (x) => x.category === req.params.category
      );
      if (filteredRecipes.length === 0) {
        throw new Error("No recipes found matching that category");
      }
      res.status(200).send(filteredRecipes);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async getVegetarian(req, res) {
    try {
      const recipes = await RecipeService.findVegetarian();
      res.status(200).send(recipes);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async findByTitle(req, res) {
    try {
      const searchTerm = req.query.title;
      const foundRecipes = await RecipeService.findTitle(searchTerm);
      res.status(200).send(foundRecipes);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async findBy(req, res) {
    try {
      const recipes = await RecipeService.getAll();

      const { difficulty, category } = req.query;
      console.log(req.query);
      let filteredRecipes = [...recipes];
      if (!difficulty && !category) {
        filteredRecipes = recipes;
      }
      if (difficulty) {
        filteredRecipes = filteredRecipes.filter(
          (x) => x.difficulty === difficulty
        );
      }
      if (category) {
        filteredRecipes = filteredRecipes.filter(
          (x) => x.category === category
        );
      }
      res.status(200).send(filteredRecipes);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}
