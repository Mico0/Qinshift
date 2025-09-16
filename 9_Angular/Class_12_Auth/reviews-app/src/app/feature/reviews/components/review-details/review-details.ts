import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewsService } from '../../../../core/services/reviews-service';
import { AuthService } from '../../../../core/services/auth-service';

@Component({
  selector: 'app-review-details',
  imports: [],
  templateUrl: './review-details.html',
  styleUrl: './review-details.scss',
})
export class ReviewDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private reviewsService = inject(ReviewsService);

  userData = inject(AuthService).userData;

  selectedReview = this.reviewsService.selectedReview;

  genresArr = computed(() => this.selectedReview().genres.split(', '));

  ngOnInit() {
    const id = Number(this.route.snapshot.params.id);

    this.reviewsService.getReviewById(id);
  }
}
