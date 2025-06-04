import { CastMember } from 'src/cast-members/entities/cast-member.entity';
import { Director } from 'src/directors/entities/director.entity';
import { Genre } from 'src/genres/entities/genre.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn({
    name: 'movie_id',
  })
  id: number;

  @Column()
  title: string;

  @Column({
    name: 'release_date',
  })
  releaseDate: string;

  @Column({
    name: 'duration_minutes',
  })
  duration: number;

  @Column()
  rating: string;

  @Column({
    name: 'plot_summary',
  })
  plotSummary: string;

  @Column()
  language: string;

  @Column()
  budget: number;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: string;

  @ManyToOne(() => Director, (director) => director.movies)
  @JoinColumn({ name: 'director_id' })
  director: Director;

  @ManyToMany(() => Genre, (genre) => genre.movies)
  genres: Genre[];

  @OneToMany(() => CastMember, (castMember) => castMember.movie)
  castMembers: CastMember[];
}
