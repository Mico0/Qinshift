import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductDto } from './dtos/product.dto';
import { ProductFilters } from './interfaces/product.interface';
export declare class ProductsService {
    private PRODUCTS_PATH;
    getAllProducts(filters?: ProductFilters): Promise<ProductDto[]>;
    saveProducts(products: ProductDto[]): Promise<void>;
    getProductById(id: string): Promise<ProductDto>;
    createProduct(productData: CreateProductDto): Promise<ProductDto>;
    updateProduct(productId: string, updateData: UpdateProductDto): Promise<void>;
    deleteProduct(id: string): Promise<void>;
}
