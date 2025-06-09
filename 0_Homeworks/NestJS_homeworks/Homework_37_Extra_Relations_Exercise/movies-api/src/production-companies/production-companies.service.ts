import { Injectable } from '@nestjs/common';
import { CreateProductionCompanyDto } from './dto/create-production-company.dto';
import { UpdateProductionCompanyDto } from './dto/update-production-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductionCompany } from './entities/production-company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductionCompaniesService {
  constructor(
    @InjectRepository(ProductionCompany)
    private companyRepo: Repository<ProductionCompany>,
  ) {}
  create(createProductionCompanyDto: CreateProductionCompanyDto) {
    return 'This action adds a new productionCompany';
  }

  async findAll() {
    return this.companyRepo.createQueryBuilder('pc').getMany();
  }

  async findOneWithMovies(id: number) {
    return this.companyRepo
      .createQueryBuilder('pc')
      .leftJoinAndSelect('pc.movieProductionCompanies', 'mpc')
      .leftJoinAndSelect('mpc.movie', 'movie')
      .where('pc.id = :id', { id })
      .getOne();
  }

  findOne(id: number) {
    return `This action returns a #${id} productionCompany`;
  }

  update(id: number, updateProductionCompanyDto: UpdateProductionCompanyDto) {
    return `This action updates a #${id} productionCompany`;
  }

  remove(id: number) {
    return `This action removes a #${id} productionCompany`;
  }
}
