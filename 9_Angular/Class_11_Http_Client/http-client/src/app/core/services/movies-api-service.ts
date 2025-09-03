import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Movie } from '../../feature/movies/models/movie-model';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  private http = inject(HttpClient);

  fetchMovies(sortBy?: 'rating' | 'likeCount') {
    const params: { [key: string]: string } = {};

    if (sortBy) params['_sort'] = `-${sortBy}`;

    return this.http.get<Movie[]>(`${BASE_URL}/movies`, {
      params,
    });
  }

  fetchMovieById(id: string) {
    return this.http.get<Movie>(`${BASE_URL}/movies/${id}`);
  }

  updateMovie(id: string, reqBody: Movie) {
    return this.http.put(`${BASE_URL}/movies/${id}`, reqBody);
  }
}
