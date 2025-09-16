import { inject, Injectable, signal } from '@angular/core';
import { ReviewsApiService } from './reviews-api-service';
import { Review } from '../../feature/reviews/review-model';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  private apiService = inject(ReviewsApiService);

  reviews = signal<Review[]>([]);
  totalCount = signal(0);
  selectedReview = signal<Review>(null);

  getReviews(firstResult: number = 1, maxResults: number = 10) {
    this.apiService.fetchReviews(firstResult, maxResults).subscribe({
      next: (value) => {
        console.log(
          'this is the value from the fetch all reviews endpoint: ',
          value,
        );
        this.reviews.set(value.reviews);
        this.totalCount.set(value.totalCount);
      },
      error: (err) => console.log(err),
    });
  }

  getReviewById(id: number) {
    this.apiService.fetchReviewById(id).subscribe({
      next: (review) => {
        this.selectedReview.set(review);
      },
      error: (err) => console.log(err),
    });
  }
}
