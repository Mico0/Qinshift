import { Movie } from 'src/movies/entities/movie.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Actor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @Column()
  birthYear: number;

  @ManyToMany(() => Movie, (movie) => movie.actors)
  movies: Movie[];
}
