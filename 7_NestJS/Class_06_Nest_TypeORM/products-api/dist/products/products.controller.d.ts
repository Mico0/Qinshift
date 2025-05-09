import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<import("./entities/product.entity").Product[]>;
    findById(id: string): Promise<void>;
    create(createData: CreateProductDto): Promise<CreateProductDto & import("./entities/product.entity").Product>;
}
