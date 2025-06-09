import {
  Entity,
  Column,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Movie } from 'src/movies/entities/movie.entity';
import { ProductionCompany } from './production-company.entity';

@Entity('movie_production_companies')
export class MovieProductionCompany {
  @PrimaryColumn({ name: 'movie_id' })
  movieId: number;

  @PrimaryColumn({ name: 'company_id' })
  productionCompanyId: number;

  @Column({ name: 'investment_amount' })
  investmentAmount: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @ManyToOne(() => Movie, (movie) => movie.movieProductionCompanies)
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @ManyToOne(
    () => ProductionCompany,
    (company) => company.movieProductionCompanies,
  )
  @JoinColumn({ name: 'company_id' })
  productionCompany: ProductionCompany;
}
