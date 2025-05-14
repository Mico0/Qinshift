import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'title',
  })
  title: string;

  @Column({
    name: 'stock',
  })
  stock: number;

  @Column({
    name: 'price',
  })
  price: number;

  @Column({
    name: 'is_available',
  })
  isAvailable: boolean;

  @ManyToMany(() => Order, (order) => order.products)
  orders: Order[];
}
