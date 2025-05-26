import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

//To use PartialType install `npm i --save @nestjs/mapped-types` so that you can import it
export class UpdateProductDto extends PartialType(CreateProductDto) {}
