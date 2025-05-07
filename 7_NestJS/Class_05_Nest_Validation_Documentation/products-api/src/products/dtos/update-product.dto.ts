import { PartialType } from '@nestjs/swagger';
import { IsString, Length, IsNumber, Min, IsOptional } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

// export class UpdateProductDto {
//   @IsString()
//   @Length(3, 30)
//   @IsOptional()
//   title: string;

//   @IsNumber()
//   @Min(0)
//   @IsOptional()
//   stock: number;

//   @IsNumber()
//   @Min(1)
//   @IsOptional()
//   price: number;
// }

export class UpdateProductDto extends PartialType(CreateProductDto) {}
