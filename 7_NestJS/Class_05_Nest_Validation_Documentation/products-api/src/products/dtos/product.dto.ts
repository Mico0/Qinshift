import { ApiProperty } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class ProductDto extends CreateProductDto {
  @ApiProperty({
    description: 'the id of the project, a valid v4 uuid',
    example: '837d7ef5-383c-4b47-9be7-09a9e0612466',
  })
  id: string;
}
