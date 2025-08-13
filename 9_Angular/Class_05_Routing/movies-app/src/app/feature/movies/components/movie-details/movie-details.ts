import { Component, inject } from '@angular/core';
import { MoviesService } from '../../../../core/services/movies-service';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
})
export class MovieDetails {
  private moviesService = inject(MoviesService);

  selectedMovie = this.moviesService.selectedMovie;
}
