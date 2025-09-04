import { computed, inject, Injectable, signal } from '@angular/core';
import {
  Movie,
  ReviewFormValue,
} from '../../feature/movies/models/movie-model';
import { MoviesApiService } from './movies-api-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private router = inject(Router);
  private apiService = inject(MoviesApiService);

  movies = signal<Movie[]>([]);

  selectedMovie = signal<Movie>(null);

  totalLikes = computed(() =>
    this.movies().reduce((acc, el) => acc + el.likeCount, 0),
  );

  avgRating = computed(
    () =>
      this.movies().reduce((acc, el) => acc + el.rating, 0) /
      this.movies().length,
  );

  getMovies(sortBy?: 'rating' | 'likeCount') {
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

    this.apiService.fetchMovieById(id).subscribe({
      next: (value) => this.selectedMovie.set(value),
      error: (err) => console.log(err),
    });
  }

  movieSelect(movie: Movie) {
    this.selectedMovie.set(movie);
  }

  createMovie(reqBody: ReviewFormValue) {
    this.apiService.postMovie(reqBody).subscribe({
      next: (createdMovie) => {
        console.log('returned value from creating movie', createdMovie);
        this.router.navigate(['movies', createdMovie.id]);
      },
      error: (err) => console.log(err),
    });
  }

  updateMovie(id: string, reqBody: Partial<Movie>) {
    this.apiService.patchMovie(id, reqBody).subscribe({
      next: (updatedMovie) => {
        console.log('this is the result of the patch operation', updatedMovie);
        this.selectedMovie.set(updatedMovie);
        this.router.navigate(['movies', updatedMovie.id]);
      },

      error: (err) => console.log(err),
    });
  }

  addLikeDislike(type: 'LIKE' | 'DISLIKE') {
    const reqMovie: Movie = {
      ...this.selectedMovie(),
      likeCount:
        type === 'LIKE'
          ? this.selectedMovie().likeCount + 1
          : this.selectedMovie().likeCount - 1,
    };

    this.apiService.putMovie(this.selectedMovie().id, reqMovie).subscribe({
      next: (value) => this.selectedMovie.set(value),
      error: (err) => console.log(err),
    });
  }
}
