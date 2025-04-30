import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Product } from './interfaces/product.interface';
@Injectable()
export class ProductsService {
  private PRODUCTS_PATH = join(
    process.cwd(),
    'src',
    'products',
    'data',
    'products.json',
  );

  async getAllProducts() {
    const productsJSON = await readFile(this.PRODUCTS_PATH, 'utf-8');
    const products = JSON.parse(productsJSON) as Product[];

    return products;
  }

  async getById(id: string) {
    const products = await this.getAllProducts();

    const foundProduct = products.find((product) => product.id === id);

    if (!foundProduct) {
      throw new NotFoundException('Product not found');
    }

    return foundProduct;
  }
}
