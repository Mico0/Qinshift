import { Component, inject } from '@angular/core';
import { MoviesService } from '../../../../core/services/movies-service';
import { Movie } from '../../models/movie-model';

@Component({
  selector: 'app-movie-details',
  standalone: false,
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
})
export class MovieDetails {
  private moviesService = inject(MoviesService);

  selectedMovie: Movie = null;

  // constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.selectedMovie$.subscribe((value) => {
      console.log('THIS IS THE SELECTED MOVIE');
      console.log(value);
      this.selectedMovie = value;
    });
  }

  onClickLikeDislike(type: 'LIKE' | 'DISLIKE') {
    //call service method
    this.moviesService.addLikeDislike(type);
  }
}
