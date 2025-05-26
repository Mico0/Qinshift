import { Type } from 'class-transformer';
import {
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class ProductFiltersDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsIn(['true', 'false'])
  inStock: 'true' | 'false';

  @IsOptional()
  @IsIn(['price', 'stock'])
  orderBy: 'price' | 'stock';

  @IsOptional()
  @Type(() => Number)
  @Min(0)
  @IsNumber()
  minPrice: number;

  @IsOptional()
  @Min(0)
  @IsNumber()
  @Type(() => Number)
  maxPrice: number;

  @Min(1)
  @IsNumber()
  @Type(() => Number)
  firstResult: number;

  @Min(1)
  @Max(100)
  @IsNumber()
  @Type(() => Number)
  maxResults: number;
}
