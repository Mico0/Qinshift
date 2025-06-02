import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(@InjectRepository(Movie) private moviesRepo: Repository<Movie>) {}

  create(createMovieDto: CreateMovieDto) {
    return 'This action adds a new movie';
  }

  findAll() {
    return this.moviesRepo.find({});
  }

  async findOne(id: number) {
    const foundMovie = await this.moviesRepo.findOne({
      where: { id },
      relations: {
        director: true,
      },
    });

    if (!foundMovie) throw new NotFoundException('Movie not found');

    return foundMovie;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
