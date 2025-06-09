import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductionCompaniesService } from './production-companies.service';
import { CreateProductionCompanyDto } from './dto/create-production-company.dto';
import { UpdateProductionCompanyDto } from './dto/update-production-company.dto';

@Controller('production-companies')
export class ProductionCompaniesController {
  constructor(
    private readonly productionCompaniesService: ProductionCompaniesService,
  ) {}

  @Post()
  create(@Body() createProductionCompanyDto: CreateProductionCompanyDto) {
    return this.productionCompaniesService.create(createProductionCompanyDto);
  }

  @Get()
  findAll() {
    return this.productionCompaniesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productionCompaniesService.findOneWithMovies(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductionCompanyDto: UpdateProductionCompanyDto,
  ) {
    return this.productionCompaniesService.update(
      +id,
      updateProductionCompanyDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productionCompaniesService.remove(+id);
  }
}
