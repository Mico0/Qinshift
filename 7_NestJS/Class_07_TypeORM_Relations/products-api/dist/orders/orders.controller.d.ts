import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<{
        user: {
            id: string;
        };
        products: {
            id: number;
        }[];
        totalAmount: number;
        date: string;
    } & import("./entities/order.entity").Order>;
    findAll(): Promise<import("./entities/order.entity").Order[]>;
    findOne(id: string): Promise<import("./entities/order.entity").Order>;
    update(id: string, updateOrderDto: UpdateOrderDto): string;
    remove(id: string): string;
}
