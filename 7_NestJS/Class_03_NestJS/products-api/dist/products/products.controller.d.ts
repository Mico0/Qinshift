import { ProductsService } from './products.service';
import { Response } from 'express';
import { LoggerService } from 'src/logger/logger.service';
import { CreateProductDTO } from './dtos/create-product.dto';
import { UpdateProductDTO } from './dtos/update-product.dto';
export declare class ProductsController {
    private productService;
    private loggerService;
    constructor(productService: ProductsService, loggerService: LoggerService);
    getAllProducts(title: string, inStock: string, minPrice: string, maxPrice: string): Promise<import("./interfaces/product.interface").Product[]>;
    getById(productId: string): Promise<import("./interfaces/product.interface").Product>;
    createProduct(createData: CreateProductDTO): Promise<import("./interfaces/product.interface").Product>;
    updateProduct(productId: string, updateData: UpdateProductDTO): Promise<void>;
    deleteProduct(productId: string, res: Response): Promise<void>;
}
