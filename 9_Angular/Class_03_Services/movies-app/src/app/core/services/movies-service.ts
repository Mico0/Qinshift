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
    // Update works with a callback in which it accepts the previous value
    this.movies.update((prevMovies) =>
      prevMovies.map((movie) => {
        if (movie.id !== movieId) return movie;
        if (type === 'LIKE') movie.likeCount = movie.likeCount + 1;
        if (type === 'DISLIKE') movie.likeCount = movie.likeCount - 1;
        return movie;
      }),
    );
    //* if (type === 'LIKE')
    //* const foundIndex = this.movies().findIndex((movie) => movie.id === movieId);
    //*   this.movies()[foundIndex].likeCount =
    //*     this.movies()[foundIndex].likeCount + 1;
    //*   this.movies()[foundIndex].likeCount =
    //* if (type === 'DISLIKE')
    //*     this.movies()[foundIndex].likeCount - 1;
    //* ⚠ Cons
    //* Mutates the existing array and movie object.
    //* Angular Signals might not detect the change unless you manually trigger an update.
    //* Breaks immutability guarantees.

    //! const foundMovie = this.movies().find((movie) => movie.id === movieId);
    //! if (type === 'LIKE') foundMovie.likeCount = foundMovie.likeCount + 1;
    //! if (type === 'DISLIKE') foundMovie.likeCount = foundMovie.likeCount - 1;
    //! 🚫 Worst choice
    //! Direct mutation without replacing reference → Angular might not re-render.
    //! Easy to cause stale UI state in reactive components.
  }
}
