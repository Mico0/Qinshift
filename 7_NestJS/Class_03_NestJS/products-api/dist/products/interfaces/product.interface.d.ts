export interface Product {
    id: string;
    title: string;
    price: number;
    stock: number;
}
export interface CreateProductReq {
    title: string;
    price: number;
    stock: number;
}
export interface UpdateProductRequest extends Partial<CreateProductReq> {
}
