import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get()
  findAll() {
    return this.productsService.findAll();
  }
  @Get(':id')
  findById(@Param('id') id: string) {
    if (Number.isNaN(Number(id)))
      throw new BadRequestException('invalid id, only numbers allowed');
    return this.productsService.findById(Number(id));
  }
  @Post()
  create(@Body() createData: CreateProductDto) {
    return this.productsService.create(createData);
  }
}
