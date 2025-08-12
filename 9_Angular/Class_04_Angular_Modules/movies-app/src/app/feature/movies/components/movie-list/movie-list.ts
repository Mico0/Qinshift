import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../../../core/services/movies-service';
import { Movie } from '../../models/movie-model';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.scss',
})
export class MovieList implements OnInit {
  private moviesService = inject(MoviesService);

  movies: Movie[] = [];

  ngOnInit() {
    this.moviesService.movies$.subscribe((value) => {
      console.log('EVENT EMITTED');
      console.log(value);
      this.movies = value;
    });

    this.moviesService.loadMovies();
  }

  onMovieClick(movie: Movie) {
    this.moviesService.onMovieSelect(movie);
  }
}
