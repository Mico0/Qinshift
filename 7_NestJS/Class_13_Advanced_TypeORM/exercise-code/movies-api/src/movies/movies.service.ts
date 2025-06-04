import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(@InjectRepository(Movie) private movieRepo: Repository<Movie>) {}
  create(createMovieDto: CreateMovieDto) {
    return 'This action adds a new movie';
  }

  async findAll() {
    const queryBuilder = this.movieRepo
      .createQueryBuilder('m')
      .select([`m.movieID`, `m.title`, `m.budget`, 'm.durationMinutes']);

    // const rawQuery = this.movieRepo.query(
    //   `
    //     SELECT m.movie_id, m.title FROM movies m
    //   `,
    // );

    return queryBuilder.getMany();

    //TODO: ZASTO ZA GET ALL RABOTI A ZA GET ONE BEZ RAW NE RABOTI - * e edge case vo ovoj slucaj i ne  e predvideno da se koristi za vlecenje na cela data
  }

  async findOne(id: number) {
    const queryBuilder = this.movieRepo
      .createQueryBuilder('m')
      .select(['*']) //! If we have a select statement we must return raw data because we are selecting aiming for raw data with *
      .where('m.movieID = :movieId', { movieId: id })
      .leftJoinAndSelect('m.directors', 'director');

    // const foundMovie = await this.movieRepo.findOne({
    //   where: { movieID: id },
    //   relations: {
    //     directors: true,
    //   },
    // });

    // console.log(await queryBuilder.getOne());

    const foundMovie = await queryBuilder.getRawOne();

    // console.log(foundMovie);

    const movie = {
      id: foundMovie.movie_id,
      title: foundMovie.title,
      release: foundMovie.release_date,
      duration: foundMovie.duration_minutes,
      rating: foundMovie.rating,
      director: foundMovie.director_id,
      plot: foundMovie.plot_summary,
      language: foundMovie.language,
      budget: Number(foundMovie.budget),
      created: foundMovie.created_at,
      directors: {
        id: foundMovie.director_id,
        firstName: foundMovie.first_name,
        lastName: foundMovie.last_name,
        biography: foundMovie.biography,
      },
    };

    // console.log(movie);

    return movie;
    // return foundMovie;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
