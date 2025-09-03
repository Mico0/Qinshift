import { computed, inject, Injectable, signal } from '@angular/core';
import { Movie } from '../../feature/movies/models/movie-model';

import { MoviesApiService } from './movies-api-service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies = signal<Movie[]>([]);
  apiService = inject(MoviesApiService);

  selectedMovie = signal<Movie>(null);

  totalLikes = computed(() =>
    this.movies().reduce((acc, el) => acc + el.likeCount, 0),
  );

  avgRating = computed(
    () =>
      this.movies().reduce((acc, el) => acc + el.rating, 0) /
      this.movies().length,
  );

  getMovies(sortBy: 'rating' | 'likeCount') {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((value: Movie[]) => {
    //     console.log('this is the value from the get movies fetch', value);
    //     this.movies.set(value);
    //   })
    //   .catch((err) => {
    //     console.error('Something went wrong');
    //     console.error(err);
    //   });

    this.apiService.fetchMovies(sortBy).subscribe({
      next: (value) => {
        console.log('this is the value from the get movies fetch', value);
        this.movies.set(value);
      },
      error: (err) => console.log(err),
    });
  }

  geMovieById(id: string) {
    //We check if selected movie has a value to avoid uneccesary calls to the backend
    if (this.selectedMovie()) return;

    // fetch(`${MOVIES_URL}/${id}`)
    //   .then((res) => res.json())
    //   .then((value: Movie) => this.selectedMovie.set(value))
    //   .catch((err) => console.error(err));

    this.apiService.fetchMovieById(id).subscribe({
      next: (value) => this.selectedMovie.set(value),
      error: (err) => console.log(err),
    });
  }

  movieSelect(movie: Movie) {
    this.selectedMovie.set(movie);
  }

  addLikeDislike(type: 'LIKE' | 'DISLIKE') {
    // this.selectedMovie.update((prevMovie) => {
    //   if (type === 'LIKE') prevMovie.likeCount += 1;
    //   if (type === 'DISLIKE') prevMovie.likeCount -= 1;

    //   return prevMovie;
    // });

    const reqMovie: Movie = {
      ...this.selectedMovie(),
      likeCount:
        type === 'LIKE'
          ? this.selectedMovie().likeCount + 1
          : this.selectedMovie().likeCount - 1,
    };

    // fetch(`${MOVIES_URL}/${this.selectedMovie().id}`, {
    //   method: 'PUT',
    //   body: JSON.stringify(reqMovie),
    // })
    //   .then((res) => res.json())
    //   .then((value) => this.selectedMovie.set(value));

    this.apiService.updateMovie(this.selectedMovie().id, reqMovie).subscribe({
      // next: (value) => this.selectedMovie.set(value),
    });
  }
}
