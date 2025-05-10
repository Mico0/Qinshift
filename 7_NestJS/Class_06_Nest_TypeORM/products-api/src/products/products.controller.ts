import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

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
      throw new BadRequestException('invalid id, only numbrs allowed');

    return this.productsService.findById(Number(id));
  }

  @Post()
  create(@Body() createData: CreateProductDto) {
    return this.productsService.create(createData);
  }

  @HttpCode(204)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: UpdateProductDto) {
    if (Number.isNaN(Number(id)))
      throw new BadRequestException('invalid id, only numbrs allowed');

    return this.productsService.updateProduct(Number(id), updateData);
  }

  @HttpCode(204)
  @Delete(':id')
  delete(@Param('id') id: string) {
    if (Number.isNaN(Number(id)))
      throw new BadRequestException('invalid id, only numbrs allowed');

    return this.productsService.delete(Number(id));
  }
}
