import { Order } from 'src/orders/entities/order.entity';
import { UserAddress } from 'src/user-address/entities/user-address.entity';
export declare class User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    age: number;
    userAddress: UserAddress;
    orders: Order[];
}
