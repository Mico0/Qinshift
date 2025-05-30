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
import { DeepPartial, Repository } from 'typeorm';
import { MovieFilters } from 'src/interfaces/movieFilters.interface';
import { filter } from 'rxjs';
import { UpdateDirectorDto } from 'src/directors/dto/update-director.dto';
import { Director } from 'src/directors/entities/director.entity';

@Injectable()
export class MoviesService {
  constructor(@InjectRepository(Movie) private movieRepo: Repository<Movie>) {}

  async create(createMovieDto: CreateMovieDto) {
    try {
      const newMovie = await this.movieRepo.save({
        ...createMovieDto,
        director: {
          id: createMovieDto.director,
        },
        actors: createMovieDto.actors.map((actorId) => {
          return { id: actorId };
        }),
        createdBy: createMovieDto.createdBy,
      });

      return newMovie;
    } catch (error) {
      console.log(error);

      if (error.code === '23503') {
        throw new BadRequestException('Invalid references added');
      }

      throw new InternalServerErrorException(error.messsage);
    }
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

    return queryBuilder
      .leftJoinAndSelect('movies.director', 'director')
      .leftJoinAndSelect('movies.actors', 'actor')
      .getMany();
  }

  async findOne(id: string) {
    try {
      const foundMovie = await this.movieRepo.findOneOrFail({
        where: { id },
        relations: {
          director: true,
          actors: true,
        },
      });
      return foundMovie;
    } catch (error) {
      throw new NotFoundException('Movie with that ID was not found');
    }
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    try {
      const foundMovie = await this.findOne(id);

      if (updateMovieDto.actors) {
        foundMovie.actors = updateMovieDto.actors.map(
          (actorId) =>
            ({
              id: actorId,
            }) as any,
        );
      }

      if (updateMovieDto.director) {
        foundMovie.director = {
          id: updateMovieDto.director,
        } as any;
      }

      const { actors, director, ...rest } = updateMovieDto;
      Object.assign(foundMovie, rest);

      return await this.movieRepo.save(foundMovie);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(error.message);
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
