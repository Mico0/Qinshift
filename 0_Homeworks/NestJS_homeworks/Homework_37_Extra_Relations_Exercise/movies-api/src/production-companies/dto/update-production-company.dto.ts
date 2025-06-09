import { PartialType } from '@nestjs/mapped-types';
import { CreateProductionCompanyDto } from './create-production-company.dto';

export class UpdateProductionCompanyDto extends PartialType(CreateProductionCompanyDto) {}
