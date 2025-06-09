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
    const queryBuilder = this.moviesRepo
      .createQueryBuilder('movies')
      .select(['movies.id', 'movies.title', 'movies.budget'])
      .offset(5)
      .limit(5);

    return queryBuilder.getMany();
  }

  async findOne(id: number) {
    const foundMovie = await this.moviesRepo.findOne({
      where: { id },
      relations: {
        director: true,
        genres: true,
        castMembers: {
          actor: true,
        },
      },
    });

    const builderQuery = this.moviesRepo
      .createQueryBuilder('movie')
      .leftJoinAndSelect('movie.genres', 'genre')
      .leftJoinAndSelect('movie.director', 'director')
      .where('movie.id = :movieId', { movieId: id })
      .getOne();

    const rawQuery = this.moviesRepo.query(
      `
        select * from movies m
        left join movie_genres mg on mg.movie_id = m.movie_id 
        left join genres g on mg.genre_id  = g.genre_id 
        left join directors d on d.director_id = m.director_id 
        where m.movie_id = $1;
      `,
      [id],
    );
    if (!foundMovie) throw new NotFoundException('Movie not found');

    return foundMovie;
  }

  async getMovieCountByGenre() {
    const response = await this.moviesRepo
      .createQueryBuilder('movie')
      .leftJoin('movie.genres', 'genre')
      .select('genre.id', 'id')
      .addSelect('genre.name', 'name')
      .addSelect('COUNT(movie.id)', 'movieCount')
      .groupBy('genre.id')
      .orderBy('genre.id')
      .getRawMany();

    return response.map((r) => ({ ...r, movieCount: Number(r.movieCount) }));
  }

  async getMovieAwards(movieId: number) {
    return this.moviesRepo
      .createQueryBuilder('movie')
      .leftJoinAndSelect('movie_awards', 'ma', 'ma.movie_id = movie.id')
      .leftJoinAndSelect('awards', 'award', 'ma.award_id = award.id')
      .where('movie.id = :id', { id: movieId })
      .select(['award.id', 'award.name'])
      .getRawMany();
  }

  async getMovieMetaData() {
    const result = await this.moviesRepo.query(`
    SELECT 
      COUNT(*) as totalMovies,
      MAX(budget) as maxBudget,
      MIN(budget) as minBudget,
      AVG(budget) as avgBudget
    FROM movies
  `);
    return result;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
