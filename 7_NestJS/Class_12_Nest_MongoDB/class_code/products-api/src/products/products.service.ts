import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductFiltersDto } from './dtos/product-filters.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './models/product.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async findAll(productFilters: ProductFiltersDto) {
    return this.productModel.find({});
  }

  async findById(id: string) {
    try {
      const foundProduct = await this.productModel.findById(id);

      if (!foundProduct) throw new Error();

      return foundProduct;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Product not found');
    }
  }

  async findProductOrders(id: number) {
    return null;
  }

  async create(createData: CreateProductDto) {
    const newProduct = new this.productModel(createData);

    const createdProduct = await newProduct.save();

    return createdProduct;
  }

  async updateProduct(id: string, updateData: UpdateProductDto) {
    const product = await this.findById(id);

    Object.assign(product, updateData);

    await product.save();

    return product;
  }

  async delete(id: string) {
    try {
      const res = await this.productModel.findByIdAndDelete(id);

      console.log(res);

      return res;
    } catch (error) {
      throw new NotFoundException('product not found');
    }
  }
}
