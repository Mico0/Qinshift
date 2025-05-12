import { UserAddress } from 'src/user-address/entities/user-address.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'int' })
  age: number;

  //User Details
  @OneToOne(() => UserAddress, (userAddress) => userAddress.user)
  userAddress: UserAddress;
  //Orders
}
