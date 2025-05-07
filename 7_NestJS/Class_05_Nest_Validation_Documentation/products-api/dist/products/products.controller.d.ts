import { ProductsService } from './products.service';
import { Response } from 'express';
import { LoggerService } from 'src/logger/logger.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
export declare class ProductsController {
    private productsService;
    private loggerService;
    constructor(productsService: ProductsService, loggerService: LoggerService);
    getAllProducts(title: string, inStock: string, minPrice: string, maxPrice: string): Promise<import("./dtos/product.dto").ProductDto[]>;
    getProductById(productId: string): Promise<import("./dtos/product.dto").ProductDto>;
    createProduct(createData: CreateProductDto): Promise<import("./dtos/product.dto").ProductDto>;
    updateProduct(id: string, updateData: UpdateProductDto): Promise<void>;
    deleteProduct(id: string, res: Response): Promise<void>;
}
