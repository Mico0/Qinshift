import {
  IsArray,
  IsDateString,
  IsInt,
  IsNegative,
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

  @IsString()
  user: string;

  @IsArray()
  @IsInt({ each: true })
  products: number[];
}
