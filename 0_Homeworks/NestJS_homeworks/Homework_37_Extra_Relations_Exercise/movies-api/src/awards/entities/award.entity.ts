import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  CreateDateColumn,
} from 'typeorm';
import { Movie } from 'src/movies/entities/movie.entity';
import { Actor } from 'src/actors/entities/actor.entity';

@Entity('awards')
export class Award {
  @PrimaryGeneratedColumn({ name: 'award_id' })
  id: number;

  @Column()
  name: string;

  @Column()
  year: number;

  @Column()
  category: string;

  @Column({ name: 'award_type' })
  awardType: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @ManyToMany(() => Movie, (movie) => movie.awards)
  movies: Movie[];

  @ManyToMany(() => Actor, (actor) => actor.awards)
  actors: Actor[];
}
