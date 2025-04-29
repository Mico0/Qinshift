import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { Product } from "../interfaces/product.interface";

const PRODUCTS_PATH = join(process.cwd(), "data", "products.json");

export class ProductsService {
  static async getAllProducts() {
    const productsJSON = await readFile(PRODUCTS_PATH, "utf-8");

    const products = JSON.parse(productsJSON) as Product[];

    return products;
  }

  static async getProductById(id: string) {
    const products = await this.getAllProducts();

    const foundProduct = products.find(product => product.id === id);

    if (!foundProduct) throw new Error("product not found");

    return foundProduct;
  }
}
