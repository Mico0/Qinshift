import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GetReviewsRes, Review } from '../../feature/reviews/review-model';
import { BASE_URL } from '../core-constants';

@Injectable({
  providedIn: 'root',
})
export class ReviewsApiService {
  private http = inject(HttpClient);

  fetchReviews(firstResult: number, maxResults: number) {
    return this.http.get<GetReviewsRes>(`${BASE_URL}/reviews`, {
      params: {
        firstResult,
        maxResults,
      },
    });
  }

  fetchReviewById(id: number) {
    return this.http.get<Review>(`${BASE_URL}/reviews/${id}`);
  }
}
