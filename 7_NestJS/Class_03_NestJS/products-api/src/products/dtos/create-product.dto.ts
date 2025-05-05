import { IsNumber, IsString, Length, Min } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @Length(3, 30)
  title: string;
  @IsNumber()
  @Min(0)
  stock: number;
  @IsNumber()
  @Min(1)
  price: number;
}
