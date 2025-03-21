import { Router } from "express";
import RecipeController from "../controllers/recipe.controller.js";

const router = Router();

router.get("/category/:category", RecipeController.filterCategory);
router.get("/vegetarian", RecipeController.getVegetarian);
router.get("/search", RecipeController.findByTitle);

router.get("/", RecipeController.findBy);
router.get("/", RecipeController.getAll);
router.get("/:id", RecipeController.getRecipe);
router.get("/:category", RecipeController.filterCategory);

router.post("/", RecipeController.createRecipe);

router.put("/:id", RecipeController.updateRecipe);

router.delete("/:id", RecipeController.deleteRecipe);

export default router;
