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
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
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

  @Get(':id/orders')
  findProductOrders(@Param('id') id: string) {
    return this.productsService.findProductOrders(Number(id));
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
