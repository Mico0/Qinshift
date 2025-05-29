import {
  IsArray,
  IsDateString,
  IsInt,
  IsNumber,
  IsString,
  Min,
} from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @Min(0)
  totalAmount: number;

  @IsDateString()
  date: string;

  @IsArray()
  @IsString({ each: true })
  products: string[];
}
