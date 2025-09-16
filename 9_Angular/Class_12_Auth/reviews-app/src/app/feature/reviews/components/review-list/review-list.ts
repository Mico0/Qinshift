import { Component, inject } from '@angular/core';
import { ReviewsService } from '../../../../core/services/reviews-service';
import { ReviewItem } from '../review-item/review-item';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.html',
  styleUrl: './review-list.scss',
  imports: [ReviewItem],
})
export class ReviewList {
  private reviewsService = inject(ReviewsService);

  reviews = this.reviewsService.reviews;

  ngOnInit() {
    this.reviewsService.getReviews();
  }
}
