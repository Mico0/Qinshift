import { Schema, model } from "mongoose";
import { dificulties, categories } from "../util/constants.js";

const recipeSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please enter a title for the recipe"],
  },
  description: {
    type: String,
    minLength: 50,
    maxLength: 700,
    required: [true, "Please enter a description for the recipe"],
  },
  ingredients: {
    type: [String],
    required: [true, "Please enter the ingredients for the recipe"],
  },
  instructions: {
    type: [String],
    required: [true, "Please enter the instructions on how to cook the recipe"],
  },
  cookingTime: {
    type: Number,
  },
  difficulty: {
    type: String,
    enum: dificulties,
  },
  isVegetarian: {
    type: Boolean,
  },
  category: {
    type: String,
    enum: categories,
  },
});

const Recipe = model("recipe", recipeSchema, "recipes");

export default Recipe;
