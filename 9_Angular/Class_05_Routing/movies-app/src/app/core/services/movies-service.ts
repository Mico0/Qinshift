import { computed, Injectable, signal } from '@angular/core';
import { Movie } from '../../feature/movies/models/movie-model';
import { MOVIES_URL } from '../../feature/movies/movie-constants';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies = signal<Movie[]>([]);

  selectedMovie = signal<Movie>(null);

  totalLikes = computed(() =>
    this.movies().reduce((acc, el) => acc + el.likeCount, 0)
  );

  avgRating = computed(
    () =>
      this.movies().reduce((acc, el) => acc + el.rating, 0) /
      this.movies().length
  );

  getMovies() {
    fetch(MOVIES_URL)
      .then((res) => res.json())
      .then((value: Movie[]) => {
        console.log('this is the value from the get movies fetch', value);
        this.movies.set(value);
      })
      .catch((err) => {
        console.error('Something went wrong');
        console.error(err);
      });
  }

  movieSelect(movie: Movie) {
    this.selectedMovie.set(movie);
  }
}
