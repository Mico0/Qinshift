import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<import("./entities/product.entity").Product[]>;
    findById(id: string): Promise<import("./entities/product.entity").Product>;
    create(createData: CreateProductDto): Promise<CreateProductDto & import("./entities/product.entity").Product>;
    update(id: string, updateData: UpdateProductDto): Promise<void>;
    delete(id: string): Promise<void>;
}
