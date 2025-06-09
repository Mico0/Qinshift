import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { MovieProductionCompany } from './movie-production-company.entity';

@Entity('production_companies')
export class ProductionCompany {
  @PrimaryGeneratedColumn({ name: 'company_id' })
  id: number;

  @Column()
  name: string;

  @Column({ name: 'founding_date' })
  foundingDate: string;

  @Column()
  headquarters: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @OneToMany(() => MovieProductionCompany, (mpc) => mpc.productionCompany)
  movieProductionCompanies: MovieProductionCompany[];
}
