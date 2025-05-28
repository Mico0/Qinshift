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
  @Type(() => Number)
  @Min(0)
  @IsNumber()
  maxPrice: number;

  @Type(() => Number)
  @Min(1)
  @IsNumber()
  firstResult: number;

  @Type(() => Number)
  @Min(5)
  @Max(100)
  @IsNumber()
  maxResults: number;
}
