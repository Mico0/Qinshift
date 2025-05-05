import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import {
  CreateProductReq,
  Product,
  ProductFilters,
  UpdateProductRequest,
} from './interfaces/product.interface';
import { v4 as uuid } from 'uuid';
import { UpdateProductDTO } from './dtos/update-product.dto';
import { CreateProductDTO } from './dtos/create-product.dto';

@Injectable()
export class ProductsService {
  private PRODUCTS_PATH = join(
    process.cwd(),
    'src',
    'products',
    'data',
    'products.json',
  );

  async getAllProducts(filters?: ProductFilters) {
    const productsJSON = await readFile(this.PRODUCTS_PATH, 'utf-8');
    let products = JSON.parse(productsJSON) as Product[];
    if (filters?.title) {
      products = products.filter((product) =>
        product.title
          .toLowerCase()
          .includes(filters.title?.toLocaleLowerCase() as string),
      );
    }
    if (filters?.inStock) {
      products = products.filter((product) => product.stock > 0);
    }

    if (filters?.minPrice) {
      products = products.filter(
        (product) => product.price >= (filters.minPrice as number),
      );
    }

    if (filters?.maxPrice) {
      products = products.filter(
        (product) => product.price <= (filters.maxPrice as number),
      );
    }
    return products;
  }

  async saveProducts(products: Product[]) {
    await writeFile(this.PRODUCTS_PATH, JSON.stringify(products, null, 2));
  }

  async getById(id: string) {
    const products = await this.getAllProducts();

    const foundProduct = products.find((product) => product.id === id);

    if (!foundProduct) {
      throw new NotFoundException('Product not found');
    }

    return foundProduct;
  }

  async createProduct(productData: CreateProductDTO) {
    const products = await this.getAllProducts();

    const newProduct: Product = {
      ...productData,
      id: uuid(),
    };

    products.push(newProduct);

    await this.saveProducts(products);

    return newProduct;
  }

  async updateProduct(productId: string, updateData: UpdateProductDTO) {
    const products = await this.getAllProducts();

    const foundProduct = products.some((product) => product.id === productId);

    if (!foundProduct) throw new NotFoundException('Product not found');

    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, ...updateData } : product,
    );

    await this.saveProducts(updatedProducts);
  }

  async deleteProduct(id: string) {
    const products = await this.getAllProducts();

    const updatedProducts = products.filter((product) => product.id !== id);

    if (products.length == updatedProducts.length)
      throw new NotFoundException('Product not found');

    await this.saveProducts(updatedProducts);
  }
}
