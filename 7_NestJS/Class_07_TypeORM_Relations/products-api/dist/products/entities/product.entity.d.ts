import { Order } from 'src/orders/entities/order.entity';
export declare class Product {
    id: number;
    title: string;
    stock: number;
    price: number;
    isAvailable: boolean;
    orders: Order[];
}
