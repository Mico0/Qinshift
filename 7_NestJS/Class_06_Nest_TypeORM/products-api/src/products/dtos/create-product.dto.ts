import { IsBoolean, IsNumber, IsString, Length } from 'class-validator';
export class CreateProductDto {
  @IsString()
  @Length(3, 30)
  title: string;

  @IsNumber()
  stock: number;
  @IsNumber()
  price: number;
  @IsBoolean()
  isAvailable: boolean;
}
