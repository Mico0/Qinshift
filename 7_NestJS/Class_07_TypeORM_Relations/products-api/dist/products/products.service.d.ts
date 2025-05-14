import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
export declare class ProductsService {
    private productsRepo;
    constructor(productsRepo: Repository<Product>);
    findAll(): Promise<Product[]>;
    findById(id: number): Promise<Product>;
    findProductOrders(id: number): Promise<Product>;
    create(createData: CreateProductDto): Promise<CreateProductDto & Product>;
    updateProduct(id: number, updateData: UpdateProductDto): Promise<void>;
    delete(id: number): Promise<void>;
}
