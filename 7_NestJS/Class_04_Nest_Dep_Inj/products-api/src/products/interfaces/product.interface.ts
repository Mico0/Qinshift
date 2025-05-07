export interface Product {
  id: string;
  title: string;
  price: number;
  stock: number;
}

export interface ProductFilters {
  title?: string;
  inStock?: boolean;
  minPrice?: number | null;
  maxPrice?: number | null;
}
