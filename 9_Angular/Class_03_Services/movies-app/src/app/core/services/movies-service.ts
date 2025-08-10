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

  addLikeDislike(type: 'LIKE' | 'DISLIKE', movieId: number) {
    //Update works with a callback in which it accepts the previous value
    this.movies.update((prevMovies) =>
      prevMovies.map((movie) => {
        if (movie.id !== movieId) return movie;

        if (type === 'LIKE') movie.likeCount = movie.likeCount + 1;
        if (type === 'DISLIKE') movie.likeCount = movie.likeCount - 1;

        return movie;
      }),
    );
  }
}
