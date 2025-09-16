import { Component, input } from '@angular/core';
import { Review } from '../../review-model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-review-item',
  imports: [RouterLink],
  templateUrl: './review-item.html',
  styleUrl: './review-item.scss',
})
export class ReviewItem {
  review = input.required<Review>();
}
