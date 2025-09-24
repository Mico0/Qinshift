import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { WorkStatus } from '../dto/create-user.dto';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
  })
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column({
    unique: true,
  })
  username: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  yearsOfExperience: number;

  @Column({ enum: WorkStatus })
  workStatus: WorkStatus;

  @Column('text', {
    array: true,
    default: [],
    nullable: true,
  })
  refreshTokens: string[];
}
