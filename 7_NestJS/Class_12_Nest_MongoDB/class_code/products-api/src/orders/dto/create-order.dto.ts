import { IsArray, IsDateString, IsInt, IsNumber, Min } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @Min(0)
  totalAmount: number;

  @IsDateString()
  date: string;

  @IsArray()
  @IsInt({ each: true })
  products: number[];
}
