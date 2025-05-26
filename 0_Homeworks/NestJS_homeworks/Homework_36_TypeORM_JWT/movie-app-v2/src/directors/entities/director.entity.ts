import {
  IsNegative,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { Movie } from 'src/movies/entities/movie.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Director {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @Column()
  birthYear: number;

  @OneToMany(() => Movie, (movie) => movie.director)
  movies: Movie[];
}
