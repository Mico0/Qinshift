import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

const FK_PG_CODE = '23503';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) private ordersRepo: Repository<Order>) {}

  async create(createOrderDto: CreateOrderDto) {
    try {
      const newOrder = await this.ordersRepo.save({
        ...createOrderDto,
        user: {
          id: createOrderDto.user,
        },
        products: createOrderDto.products.map((productId) => {
          return { id: productId };
        }),
      });

      return newOrder;
    } catch (error) {
      console.log(error);

      if (error.code === FK_PG_CODE) {
        throw new BadRequestException('Invalid references added');
      }

      throw new InternalServerErrorException(error.messsage);
    }
  }

  findAll() {
    return this.ordersRepo.find({
      loadEagerRelations: false,
    });
  }

  async findOne(id: number) {
    const foundOrder = await this.ordersRepo.findOne({
      where: { id },
      relations: {
        user: true,
        products: true,
      },
    });

    if (!foundOrder) throw new NotFoundException('Order not found');

    return foundOrder;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
