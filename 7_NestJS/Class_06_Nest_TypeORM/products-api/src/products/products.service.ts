import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepo: Repository<Product>,
  ) {}

  async findAll() {
    return this.productsRepo.find();
  }

  async findById(id: number) {
    const foundProduct = await this.productsRepo.findOneBy({ id });

    if (!foundProduct) throw new NotFoundException('Product not found');
  }

  async create(createData: CreateProductDto) {
    return this.productsRepo.save(createData);
  }

  async delete(id: number) {
    const foundProduct = await this.findById(id);

    await this.productsRepo.remove(foundProduct);
  }
}
