import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from '../../../../../Class_07_TypeORM_Relations/products-api/src/orders/entities/order.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  stock: number;

  @Column()
  price: number;

  @Column()
  isAvailable: boolean;

  @ManyToMany(() => Order, (order) => order.products)
  orders: Order[];
}
