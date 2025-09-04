import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  Movie,
  ReviewFormValue,
} from '../../feature/movies/models/movie-model';

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

  postMovie(reqBody: ReviewFormValue) {
    return this.http.post<Movie>(`${BASE_URL}/movies`, {
      ...reqBody,
      likeCount: 0,
    });
  }

  patchMovie(id: string, reqBody: Partial<Movie>) {
    return this.http.patch<Movie>(`${BASE_URL}/movies/${id}`, reqBody);
  }

  putMovie(id: string, reqBody: Movie) {
    return this.http.put<Movie>(`${BASE_URL}/movies/${id}`, reqBody);
  }
}
