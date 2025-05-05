import { IsNumber, IsOptional, IsString, Length, Min } from 'class-validator';

export class UpdateProductDTO {
  @IsString()
  @Length(3, 30)
  @IsOptional()
  title: string;
  @IsNumber()
  @Min(0)
  @IsOptional()
  stock: number;
  @IsNumber()
  @Min(1)
  @IsOptional()
  price: number;
}
