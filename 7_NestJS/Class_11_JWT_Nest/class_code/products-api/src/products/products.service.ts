import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import {
  Equal,
  FindManyOptions,
  ILike,
  LessThanOrEqual,
  MoreThan,
  MoreThanOrEqual,
  Repository,
} from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductFiltersDto } from './dtos/product-filters.dto';
import { filter } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepo: Repository<Product>,
  ) {}

  async findAll(productFilters: ProductFiltersDto) {
    const findOptions: FindManyOptions<Product> = {};

    if (productFilters.title) {
      findOptions.where = { title: ILike(`%${productFilters.title}%`) };
    }

    if (productFilters.inStock === 'true') {
      findOptions.where = { ...findOptions.where, stock: MoreThan(0) };
    }

    if (productFilters.inStock === 'false') {
      findOptions.where = { ...findOptions.where, stock: Equal(0) };
    }

    if (productFilters.minPrice) {
      findOptions.where = {
        ...findOptions.where,
        price: MoreThanOrEqual(productFilters.minPrice),
      };
    }

    if (productFilters.maxPrice) {
      findOptions.where = {
        ...findOptions.where,
        price: LessThanOrEqual(productFilters.maxPrice),
      };
    }

    findOptions.skip = productFilters.firstResult - 1;
    findOptions.take = productFilters.maxResults;

    const [products, totalCOunt] =
      await this.productsRepo.findAndCount(findOptions);

    return { products, totalCOunt };
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
