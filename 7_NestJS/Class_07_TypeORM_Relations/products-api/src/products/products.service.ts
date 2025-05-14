import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepo: Repository<Product>,
  ) {}

  async findAll() {
    return this.productsRepo.find({
      //Will load all ids of relations of a given entity
      // loadRelationIds: true,
    });
  }

  async findById(id: number) {
    const foundProduct = await this.productsRepo.findOneBy({ id });

    if (!foundProduct) throw new NotFoundException('product not found');

    return foundProduct;
  }

  async findProductOrders(id: number) {
    const foundProduct = await this.productsRepo.findOne({
      where: { id },
      relations: {
        orders: true,
      },
    });

    if (!foundProduct) throw new NotFoundException('product not found');

    return foundProduct;
  }

  async create(createData: CreateProductDto) {
    return this.productsRepo.save(createData);
  }

  async updateProduct(id: number, updateData: UpdateProductDto) {
    const foundProduct = await this.findById(id);

    Object.assign(foundProduct, updateData);

    console.log(foundProduct);

    await this.productsRepo.save(foundProduct);
  }

  async delete(id: number) {
    const foundProduct = await this.findById(id);

    await this.productsRepo.remove(foundProduct);
  }
}
