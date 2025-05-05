import { Product } from './interfaces/product.interface';
import { UpdateProductDTO } from './dtos/update-product.dto';
import { CreateProductDTO } from './dtos/create-product.dto';
export declare class ProductsService {
    private PRODUCTS_PATH;
    getAllProducts(): Promise<Product[]>;
    saveProducts(products: Product[]): Promise<void>;
    getById(id: string): Promise<Product>;
    createProduct(productData: CreateProductDTO): Promise<Product>;
    updateProduct(productId: string, updateData: UpdateProductDTO): Promise<void>;
    deleteProduct(id: string): Promise<void>;
}
