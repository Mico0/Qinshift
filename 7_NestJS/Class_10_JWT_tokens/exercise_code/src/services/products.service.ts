import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import {
  CreateProductReq,
  Product,
  UpdateProductRequest,
} from "../interfaces/product.interface";
import { v4 as uuid } from "uuid";

const PRODUCTS_PATH = join(process.cwd(), "data", "products.json");

export class ProductsService {
  static async getAllProducts() {
    const productsJSON = await readFile(PRODUCTS_PATH, "utf-8");

    const products = JSON.parse(productsJSON) as Product[];

    return products;
  }

  static async saveProducts(products: Product[]) {
    await writeFile(PRODUCTS_PATH, JSON.stringify(products, null, 2));
  }

  static async getProductById(id: string) {
    const products = await this.getAllProducts();

    const foundProduct = products.find(product => product.id === id);

    if (!foundProduct) throw new Error("product not found");

    return foundProduct;
  }

  static async createProduct(createData: CreateProductReq) {
    const products = await this.getAllProducts();

    const newProduct: Product = {
      id: uuid(),
      ...createData,
    };

    products.push(newProduct);

    await this.saveProducts(products);

    return newProduct;
  }

  static async updateProduct(id: string, updateData: UpdateProductRequest) {
    const products = await this.getAllProducts();

    const productExists = products.some(product => product.id === id);

    if (!productExists) throw new Error("Product not found");

    const updatedProducts = products.map(product => {
      if (product.id === id) {
        return { ...product, ...updateData };
      }
      return product;
    });

    await this.saveProducts(updatedProducts);
  }

  static async deleteProduct(id: string) {
    const products = await this.getAllProducts();

    const updatedProducts = products.filter(product => product.id !== id);

    if (products.length === updatedProducts.length)
      throw new Error("product not found");

    await this.saveProducts(updatedProducts);
  }
}
