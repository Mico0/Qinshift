import { Injectable, signal } from '@angular/core';
import { Movie } from '../../feature/movies/models/movie.model';
import { moviesMock } from '../../feature/movies/movies.mock';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies = signal<Movie[]>([]);

  loadMovies() {
    this.movies.set(moviesMock);

    console.log(this.movies());
  }

  selectedMovie = signal<Movie>(null);

  onMovieSelect(movie: Movie) {
    console.log('The selected movie is ', movie);
    this.selectedMovie.set(movie);
  }
}
