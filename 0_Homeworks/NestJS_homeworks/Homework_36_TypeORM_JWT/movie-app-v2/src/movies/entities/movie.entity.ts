import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Genre } from '../enums/genre.enum';
import { Director } from 'src/directors/entities/director.entity';
import { Actor } from 'src/actor/entities/actor.entity';

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

  @ManyToOne(() => Director, (director) => director.movies, {
    eager: true,
  })
  @JoinColumn({
    name: 'director_id',
  })
  director: Director;

  @ManyToMany(() => Actor, (actor) => actor.movies)
  actors: Actor[];
}
