import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../../feature/movies/models/movie-model';
import { moviesMock } from '../../feature/movies/movies-mock';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies$ = new BehaviorSubject<Movie[]>([]);
  selectedMovie$ = new BehaviorSubject<Movie>(null);

  loadMovies() {
    this.movies$.next(moviesMock);
  }

  onMovieSelect(movie: Movie) {
    this.selectedMovie$.next(movie);
  }

  addLikeDislike(type: 'LIKE' | 'DISLIKE') {
    console.log(this.movies$.getValue());

    this.selectedMovie$.next({
      ...this.selectedMovie$.getValue(),
      likeCount:
        type === 'LIKE'
          ? this.selectedMovie$.getValue().likeCount + 1
          : this.selectedMovie$.getValue().likeCount - 1,
    });

    this.movies$.next(
      this.movies$.getValue().map((movie) => {
        if (movie.id !== this.selectedMovie$.getValue().id) return movie;

        if (type === 'LIKE') movie.likeCount += 1;
        if (type === 'DISLIKE') movie.likeCount -= 1;

        return { ...movie };
      }),
    );
  }
}
