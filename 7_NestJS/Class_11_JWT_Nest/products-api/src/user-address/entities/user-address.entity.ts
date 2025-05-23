import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'country',
  })
  country: string;

  @Column({
    name: 'city',
  })
  city: string;

  @Column({
    name: 'street',
  })
  street: string;

  @Column({
    name: 'zipcode',
  })
  zipCode: string;

  @OneToOne(() => User, (user) => user.userAddress)
  @JoinColumn({
    //In join column we configure the name of the foreign key column
    name: 'user_id',
  })
  user: User;
}
