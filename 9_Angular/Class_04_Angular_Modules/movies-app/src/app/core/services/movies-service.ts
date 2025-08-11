import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../../feature/movies/models/movie-model';
import { moviesMock } from '../../feature/movies/movies-mock';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies$ = new BehaviorSubject<Movie[]>([]);

  loadMovies() {
    this.movies$.next(moviesMock);
  }
}
