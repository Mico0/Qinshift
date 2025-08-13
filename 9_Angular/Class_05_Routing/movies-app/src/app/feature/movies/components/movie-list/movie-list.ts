import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../../../core/services/movies-service';
import { MovieItem } from '../movie-item/movie-item';
import { Movie } from '../../models/movie-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  imports: [MovieItem],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.scss',
})
export class MovieList implements OnInit {
  private moviesService = inject(MoviesService);
  private router = inject(Router);

  movies = this.moviesService.movies;
  totalLikes = this.moviesService.totalLikes;
  avgRating = this.moviesService.avgRating;

  ngOnInit() {
    this.moviesService.getMovies();
  }

  onMovieClick(movie: Movie) {
    console.log(movie);

    this.moviesService.movieSelect(movie);

    //Navigate to the proper details page
    this.router.navigate(['movies', movie.id]);
    // this.router.navigateByUrl(`/movies/${movie.id}`);
  }
}
