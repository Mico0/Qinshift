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
import { MovieFilters } from 'src/interfaces/movieFilters.interface';
import { filter } from 'rxjs';

@Injectable()
export class MoviesService {
  constructor(@InjectRepository(Movie) private movieRepo: Repository<Movie>) {}

  async create(createMovieDto: CreateMovieDto) {
    return this.movieRepo.save(createMovieDto);
  }

  async findAll(filters?: MovieFilters) {
    const queryBuilder = this.movieRepo.createQueryBuilder('movies');

    if (filters?.genre) {
      // console.log('In if');
      queryBuilder.andWhere('movies.genre = :genre', { genre: filters.genre });
    }

    if (filters?.maxDuration) {
      queryBuilder.andWhere('movies.duration <= :maxDuration', {
        maxDuration: filters.maxDuration,
      });
    }

    if (filters?.minRating) {
      queryBuilder.andWhere('movies.rating >= :minRating', {
        minRating: filters.minRating,
      });
    }

    if (filters?.title) {
      queryBuilder.andWhere('movies.title ILIKE :title', {
        title: `%${filters.title}%`,
      });
    }

    if (filters?.sortBy) {
      // console.log(filters.sortDirection);

      const sortDirection = (
        filters?.sortDirection?.toUpperCase() === 'ASC' ? 'ASC' : 'DESC'
      ) as 'ASC' | 'DESC';

      queryBuilder.orderBy(filters?.sortBy, sortDirection);
    }

    return queryBuilder.getMany();
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
