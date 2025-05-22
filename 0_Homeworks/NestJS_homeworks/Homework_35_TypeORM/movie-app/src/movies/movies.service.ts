import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(@InjectRepository(Movie) private movieRepo: Repository<Movie>) {}

  async create(createMovieDto: CreateMovieDto) {
    return this.movieRepo.save(createMovieDto);
  }

  async findAll() {
    return this.movieRepo.find();
  }

  async findOne(id: string) {
    try {
      const foundMovie = await this.movieRepo.findOneByOrFail({ id });
      return foundMovie;
    } catch (error) {
      throw new NotFoundException('Movie with that ID was not found');
    }
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    try {
      const foundMovie = await this.findOne(id);

      Object.assign(foundMovie, updateMovieDto);

      await this.movieRepo.save(foundMovie);
    } catch (error) {
      throw new InternalServerErrorException(error.messsage);
    }
  }

  async remove(id: string) {
    try {
      const foundMovie = await this.findOne(id);

      await this.movieRepo.remove(foundMovie);
    } catch (error) {
      throw new BadRequestException('Movie not found and not deleted');
    }
  }
}
