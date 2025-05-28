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
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/roles/roles.decorator';
import { ROUTES } from '@nestjs/core/router/router-module';
import { RoleType } from 'src/roles/roles.model';
import { RolesGuard } from 'src/roles/roles.guard';
import { ProductFiltersDto } from './dtos/product-filters.dto';

@UseGuards(AuthGuard, RolesGuard)
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  findAll(@Query() productFilters: ProductFiltersDto) {
    return this.productsService.findAll(productFilters);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.productsService.findById(id);
  }

  @Get(':id/orders')
  findProductOrders(@Param('id') id: string) {
    return this.productsService.findProductOrders(Number(id));
  }

  @Roles(RoleType.ADMIN)
  @Post()
  create(@Body() createData: CreateProductDto) {
    return this.productsService.create(createData);
  }

  @HttpCode(204)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: UpdateProductDto) {
    return this.productsService.updateProduct(id, updateData);
  }

  @HttpCode(204)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.delete(id);
  }
}
