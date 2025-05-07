import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Response } from 'express';
import { LoggerService } from 'src/logger/logger.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductFilters } from './interfaces/product.interface';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(
    private productsService: ProductsService,
    private loggerService: LoggerService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Returns all products' })
  getAllProducts(
    @Query('title') title: string,
    @Query('inStock') inStock: string,
    @Query('minPrice') minPrice: string,
    @Query('maxPrice') maxPrice: string,
  ) {
    console.log(title, inStock, minPrice, maxPrice);

    const productFilters: ProductFilters = {
      title,
      inStock: !!inStock,
      minPrice: !Number.isNaN(Number(minPrice)) ? Number(minPrice) : null,
      maxPrice: !Number.isNaN(Number(maxPrice)) ? Number(maxPrice) : null,
    };

    this.loggerService.addLog('products fetched');

    return this.productsService.getAllProducts(productFilters);
  }

  @Get(':id')
  getProductById(@Param('id') productId: string) {
    return this.productsService.getProductById(productId);
  }

  @Post()
  createProduct(@Body() createData: CreateProductDto) {
    return this.productsService.createProduct(createData);
  }

  @HttpCode(204)
  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() updateData: UpdateProductDto) {
    return this.productsService.updateProduct(id, updateData);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string, @Res() res: Response) {
    await this.productsService.deleteProduct(id);

    res.sendStatus(204);
  }
}
