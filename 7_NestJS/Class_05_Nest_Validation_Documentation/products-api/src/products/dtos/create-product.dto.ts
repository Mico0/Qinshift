import {
  IsArray,
  IsNumber,
  IsObject,
  IsString,
  Length,
  Min,
  ValidateNested,
} from 'class-validator';
import { ProductDetailsDto } from './product-details.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'title of the product',
    example: 'shoes',
  })
  @IsString()
  @Length(3, 30)
  title: string;

  @ApiProperty({
    description: 'starting stock',
    example: 300,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  stock: number;

  @ApiProperty({
    description: 'starting product price',
    examples: [129.33, 43.44, 199.99],
    minimum: 1,
  })
  @ApiProperty()
  @IsNumber()
  @Min(1)
  price: number;

  @ApiProperty({
    description: 'tags for the product',
    example: ['kitchen', 'small', 'appliance'],
    minItems: 1,
  })
  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @ApiProperty()
  @IsObject()
  @ValidateNested()
  @Type(() => ProductDetailsDto)
  details: ProductDetailsDto;
}
