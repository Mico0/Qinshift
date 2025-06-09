import { Movie } from 'src/movies/entities/movie.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('directors')
export class Director {
  @PrimaryGeneratedColumn({
    name: 'director_id',
  })
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'birth_date' })
  birthDate: string;

  @Column()
  nationality: string;

  @Column()
  biography: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: string;

  @OneToMany(() => Movie, (movie) => movie.director)
  movies: Movie[];
}
