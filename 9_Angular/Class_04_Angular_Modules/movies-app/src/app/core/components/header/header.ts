import { Component, inject } from '@angular/core';
import { MoviesService } from '../../services/movies-service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private moviesService = inject(MoviesService);

  totalLikes: number;
  avgRating: number;

  ngOnInit() {
    this.moviesService.movies$.subscribe((value) => {
      this.totalLikes = value.reduce((acc, el) => acc + el.likeCount, 0);
      this.avgRating =
        value.reduce((acc, el) => acc + el.rating, 0) / value.length;
    });
  }
}
