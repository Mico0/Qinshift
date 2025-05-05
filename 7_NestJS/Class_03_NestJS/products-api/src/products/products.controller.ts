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
import {
  CreateProductReq,
  ProductFilters,
  UpdateProductRequest,
} from './interfaces/product.interface';
import { Response } from 'express';
import { LoggerService } from 'src/logger/logger.service';
import { CreateProductDTO } from './dtos/create-product.dto';
import { UpdateProductDTO } from './dtos/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(
    private productService: ProductsService,
    private loggerService: LoggerService,
  ) {}

  @Get()
  getAllProducts(
    @Query('title') title: string,
    @Query('inStock') inStock: string,
    @Query('minPrice') minPrice: string,
    @Query('maxPrice') maxPrice: string,
  ) {
    console.log(title, inStock);
    const producFIlters: ProductFilters = {
      title,
      inStock: !!inStock,
      minPrice: !Number.isNaN(Number(minPrice)) ? Number(minPrice) : null,
      maxPrice: !Number.isNaN(Number(minPrice)) ? Number(minPrice) : null,
    };
    this.loggerService.addLog('products fetched');
    return this.productService.getAllProducts(producFIlters);
  }

  @Get(':id')
  getById(@Param('id') productId: string) {
    return this.productService.getById(productId);
  }

  @Post()
  createProduct(@Body() createData: CreateProductDTO) {
    return this.productService.createProduct(createData);
  }

  @HttpCode(204)
  @Patch(':id')
  updateProduct(
    @Param('id') productId: string,
    @Body() updateData: UpdateProductDTO,
  ) {
    return this.productService.updateProduct(productId, updateData);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') productId: string, @Res() res: Response) {
    await this.productService.deleteProduct(productId);

    res.sendStatus(204);
  }
}
