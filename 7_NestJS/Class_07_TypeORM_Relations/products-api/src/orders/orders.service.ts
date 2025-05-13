import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) private ordersRepo: Repository<Order>) {}

  create(createOrderDto: CreateOrderDto) {
    const newOrder = this.ordersRepo.create({
      ...createOrderDto,
      user: {
        id: createOrderDto.userId,
      },
    });

    return this.ordersRepo.save(newOrder);
  }

  findAll() {
    return this.ordersRepo.find({
      relations: {
        user: true,
        products: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
