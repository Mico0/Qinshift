import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Genre } from '../enums/genre.enum';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'title', type: 'varchar', length: 256 })
  title: string;

  @Column({ name: 'description', type: 'varchar', length: 512 })
  description: string;

  @Column({ name: 'release_year' })
  release_year: number;

  @Column({ type: 'enum', enum: Genre, nullable: false, name: 'genre' })
  genre: Genre;

  @Column({ name: 'duration' })
  duration: number;

  @Column({ name: 'rating' })
  rating: number;

  @Column({ name: 'poster_url' })
  poster_url?: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: number;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: number;
}
