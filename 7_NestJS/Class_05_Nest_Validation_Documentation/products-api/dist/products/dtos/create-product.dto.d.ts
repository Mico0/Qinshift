import { ProductDetailsDto } from './product-details.dto';
export declare class CreateProductDto {
    title: string;
    stock: number;
    price: number;
    tags: string[];
    details: ProductDetailsDto;
}
