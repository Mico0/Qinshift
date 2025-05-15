export interface Product {
  id: string;
  title: string;
  stock: number;
  price: number;
}

export interface CreateProductReq {
  title: string;
  stock: number;
  price: number;
}

export interface UpdateProductRequest extends Partial<CreateProductReq> {}
