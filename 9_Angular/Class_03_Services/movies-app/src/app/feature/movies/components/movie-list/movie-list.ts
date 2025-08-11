import { Component, inject, OnInit, signal } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { moviesMock } from '../../movies.mock';
import { MovieItem } from '../movie-item/movie-item';
import { LoggerService } from '../../../../core/services/logger-service';
import { MoviesService } from '../../../../core/services/movies-service';

@Component({
  selector: 'app-movie-list',
  imports: [MovieItem],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.scss',
})
export class MovieList implements OnInit {
  private loggerService = inject(LoggerService);
  private moviesService = inject(MoviesService);

  //This is a reference to the signal that is defined in the service, it is not a copy (changing this wrongly will also change the source in the service)
  //This is only here because we need to use the movies from the movies service in the template of the component
  movies = this.moviesService.movies;

  ngOnInit(): void {
    this.moviesService.loadMovies();
    this.loggerService.logDetails('Movie List');
  }

  onMovieItemClick(movie: Movie) {
    this.moviesService.onMovieSelect(movie);
  }
}
