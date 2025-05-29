import { Injectable } from '@nestjs/common';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Director } from './entities/director.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DirectorsService {
  constructor(
    @InjectRepository(Director) private directorRepo: Repository<Director>,
  ) {}

  create(createDirectorDto: CreateDirectorDto) {
    return this.directorRepo.save(createDirectorDto);
  }

  findAll() {
    return this.directorRepo.find({
      relations: {
        movies: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} director`;
  }

  update(id: number, updateDirectorDto: UpdateDirectorDto) {
    return `This action updates a #${id} director`;
  }

  remove(id: number) {
    return `This action removes a #${id} director`;
  }
}
