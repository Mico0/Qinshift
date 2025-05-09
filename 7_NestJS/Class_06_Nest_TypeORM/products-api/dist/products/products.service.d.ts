import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
export declare class ProductsService {
    private productsRepo;
    constructor(productsRepo: Repository<Product>);
    findAll(): Promise<Product[]>;
    findById(id: number): Promise<void>;
    create(createData: CreateProductDto): Promise<CreateProductDto & Product>;
    delete(id: number): Promise<void>;
}
