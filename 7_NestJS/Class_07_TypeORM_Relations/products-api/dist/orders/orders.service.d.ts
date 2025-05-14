import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
export declare class OrdersService {
    private ordersRepo;
    constructor(ordersRepo: Repository<Order>);
    create(createOrderDto: CreateOrderDto): Promise<{
        user: {
            id: string;
        };
        products: {
            id: number;
        }[];
        totalAmount: number;
        date: string;
    } & Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    update(id: number, updateOrderDto: UpdateOrderDto): string;
    remove(id: number): string;
}
