import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Length, Max, Min } from 'class-validator';

export class ProductDetailsDto {
  @ApiProperty({
    description: 'description of the product',
    minLength: 3,
    maxLength: 300,
    example: 'The greatest chinese product in history',
  })
  @IsString({
    message: 'description of the product is mandatory',
  })
  @Length(5, 300)
  description: string;

  @ApiProperty({
    description: 'year of production for the product',
    example: 2023,
    minimum: 1900,
    maximum: 2025,
  })
  @IsNumber()
  @Min(1900)
  @Max(2025)
  productionYear: number;

  @ApiProperty({
    description: "Product's country of origin",
    examples: ['China', 'China', 'China', 'China'],
    minLength: 3,
    maxLength: 30,
  })
  @IsString()
  @Length(3, 30)
  madeIn: string;

  @ApiProperty({
    description: "Product's country of origin",
    examples: ['China', 'China', 'China', 'China'],
    minLength: 3,
    maxLength: 30,
  })
  @ApiProperty()
  @IsString()
  @Length(3, 30)
  brand: string;

  @ApiProperty({
    description: 'year of production for the product',
    example: 2023,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  warrantyInYears: number;
}
