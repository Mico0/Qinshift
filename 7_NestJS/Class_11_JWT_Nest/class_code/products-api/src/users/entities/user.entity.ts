import { Exclude } from 'class-transformer';
import { Order } from 'src/orders/entities/order.entity';
import { RoleType } from 'src/roles/roles.model';
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
    name: 'email',
  })
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column({
    default: RoleType.USER,
  })
  role: RoleType;

  @Column({
    name: 'first_name',
  })
  firstName: string;

  @Column({
    name: 'last_name',
  })
  lastName: string;

  @Column({ type: 'int' })
  age: number;

  @Exclude()
  @Column('text', {
    array: true,
    default: [],
    nullable: true,
  })
  refreshTokens: string[];

  //User Address
  @OneToOne(() => UserAddress, (userAddres) => userAddres.user)
  userAddress: UserAddress;

  //Orders
  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
