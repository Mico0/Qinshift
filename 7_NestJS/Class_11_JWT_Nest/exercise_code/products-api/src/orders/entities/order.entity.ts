import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'total_amount',
  })
  totalAmount: number;

  @Column({
    name: 'date',
  })
  date: Date;

  //You can add @JoinColumn() but it is not needed
  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({
    name: 'user_id',
  })
  user: User;

  @ManyToMany(() => Product, (product) => product.orders, {
    //Automatically loads relations when eager is set to true, can only be set on one side of the relationship
    // eager: true,
  })
  @JoinTable({
    name: 'orders_products',
    joinColumn: {
      name: 'order_id',
    },
    inverseJoinColumn: {
      name: 'product_id',
    },
  })
  products: Product[];

  //Alternative way of fetching only the foreign keys, will create a new property in every entity object returned ragardless of relation options
  // @RelationId((order: Order) => order.products)
  // productIds: number[];
}
