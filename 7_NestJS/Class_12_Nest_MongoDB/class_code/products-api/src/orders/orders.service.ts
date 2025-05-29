import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './models/order.model';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private ordersModel: Model<Order>) {}

  async create(userId: string, createOrderDto: CreateOrderDto) {
    const newOrder = new this.ordersModel({ ...createOrderDto, user: userId });

    const createdOrder = await newOrder.save();

    return createdOrder;
  }

  findAll() {
    return this.ordersModel.find({});
  }

  async findOne(id: string) {
    try {
      const order = await this.ordersModel.findById(id).populate('products');

      if (!order) throw new Error();

      return order;
    } catch (error) {
      throw new NotFoundException('Order not found');
    }
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
