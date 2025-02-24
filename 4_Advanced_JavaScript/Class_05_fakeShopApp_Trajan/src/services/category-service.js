import { Category } from "../models/models.js";

export const categoryService = {
    baseUrl: 'https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G1/Class15/data/products.json',
    categories: [],

    getCategories: async function () {
        if(this.categories.length !== 0) {
            return this.categories;
        }
        const response = await fetch(this.baseUrl);
        const data = await response.json();
        const mapedCategories = new Map();
        for(const category of data) {
            mapedCategories.set(category.category.id, new Category(category.category.id, category.category.name, category.category.image));
        }
        console.log(mapedCategories);
        this.categories = mapedCategories.values().map((value) => new Category(value.id, value.name, value.image));
        return this.categories;
    }
}