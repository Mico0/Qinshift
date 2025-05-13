import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

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
