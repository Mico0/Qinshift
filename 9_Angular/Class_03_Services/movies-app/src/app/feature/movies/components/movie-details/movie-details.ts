import { Component, inject } from '@angular/core';
import { MoviesService } from '../../../../core/services/movies-service';
import { Button } from '../../../../shared/components/button/button';
import { asapScheduler } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  imports: [Button],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
})
export class MovieDetails {
  private moviesService = inject(MoviesService);

  //This is a referen e to the property in the service, not a new signal/object
  //We only use references from service values if we need them in the template
  selectedMovie = this.moviesService.selectedMovie;

  onClickLikeDislike(type: 'LIKE' | 'DISLIKE') {
    console.log('like or dislike clicked with: ', type);
    this.moviesService.addLikeDislike(type, this.selectedMovie().id);
  }
}
