import { Movie } from 'src/movies/entities/movie.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('genres')
export class Genre {
  @PrimaryGeneratedColumn({ name: 'genre_id' })
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: string;

  @ManyToMany(() => Movie, (movie) => movie.genres)
  @JoinTable({
    name: 'movie_genres',
    joinColumn: {
      name: 'genre_id',
    },
    inverseJoinColumn: {
      name: 'movie_id',
    },
  })
  movies: Movie[];
}
