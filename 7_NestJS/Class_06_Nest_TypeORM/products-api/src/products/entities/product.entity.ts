import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
