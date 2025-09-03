import { Component, inject } from '@angular/core';
import { MoviesService } from '../../../../core/services/movies-service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  imports: [ButtonComponent],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
})
export class MovieDetails {
  private moviesService = inject(MoviesService);

  private route = inject(ActivatedRoute);

  ngOnInit() {
    const movieId: string = this.route.snapshot.params['id'];

    this.moviesService.geMovieById(movieId);
  }

  selectedMovie = this.moviesService.selectedMovie;

  onClickLikeDislike(type: 'LIKE' | 'DISLIKE') {
    this.moviesService.addLikeDislike(type);
  }
}
