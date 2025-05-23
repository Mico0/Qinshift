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

@Injectable()
export class MoviesService {
  constructor(@InjectRepository(Movie) private movieRepo: Repository<Movie>) {}

  async create(createMovieDto: CreateMovieDto) {
    return this.movieRepo.save(createMovieDto);
  }

  async findAll(filters?: MovieFilters) {
    let movies = await this.movieRepo.find();
    // console.log(movies);
    if (filters?.genre) {
      movies = movies.filter(
        (movie) => movie.genre === (filters.genre as string),
      );
    }

    if (filters?.minRating) {
      movies = movies.filter(
        (movie) => movie.rating >= (filters.minRating as number),
      );
    }

    if (filters?.maxDuration) {
      movies = movies.filter(
        (movie) => movie.duration <= (filters.maxDuration as number),
      );
    }

    if (filters?.title) {
      movies = movies.filter((movie) =>
        movie.title
          .toLowerCase()
          .includes(filters.title?.toLowerCase() as string),
      );
    }

    // console.log(filters?.sortBy);

    if (filters?.sortDirection) {
      movies = this.sortMovies(
        filters?.sortDirection,
        filters?.sortBy!,
        movies,
      );
    }

    return movies;
  }

  sortMovies(sortDirection: string, sortBy: string = 'desc', movies: Movie[]) {
    console.log('Sorting');

    if (sortDirection === 'releaseYear' && sortBy === 'asc') {
      console.log('Sorting 1');

      movies = [...movies].sort((a, b) => a.release_year - b.release_year);
    } else if (sortDirection === 'releaseYear' && sortBy) {
      console.log('Sorting 1/2');

      movies = [...movies].sort((a, b) => b.release_year - a.release_year);
    }

    if (sortDirection === 'rating' && sortBy === 'asc') {
      console.log('Sorting 2');

      movies = [...movies].sort((a, b) => a.rating - b.rating);
    } else if (sortDirection === 'rating' && sortBy) {
      console.log('Sorting 2/2');

      movies = [...movies].sort((a, b) => b.rating - a.rating);
    }

    if (sortDirection === 'duration' && sortBy === 'asc') {
      console.log('Sorting 3');

      movies = [...movies].sort((a, b) => a.duration - b.duration);
    } else if (sortDirection === 'duration' && sortBy) {
      console.log('Sorting 3/2');

      movies = [...movies].sort((a, b) => b.duration - a.duration);
    }

    return movies;
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
