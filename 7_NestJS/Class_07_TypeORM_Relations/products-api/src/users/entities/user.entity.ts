import { Order } from 'src/orders/entities/order.entity';
import { UserAddress } from 'src/user-address/entities/user-address.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'int' })
  age: number;

  //User Details
  @OneToOne(() => UserAddress, (userAddres) => userAddres.user)
  userAddress: UserAddress;

  //Orders
  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
