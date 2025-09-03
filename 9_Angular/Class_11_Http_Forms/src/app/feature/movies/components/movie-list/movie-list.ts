import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../../../core/services/movies-service';
import { MovieItem } from '../movie-item/movie-item';
import { Movie } from '../../models/movie-model';
import { ActivatedRoute, Router } from '@angular/router';
import { AddMovie } from '../add-movie/add-movie';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-movie-list',
  imports: [MovieItem, ButtonComponent],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.scss',
})
export class MovieList implements OnInit {
  private moviesService = inject(MoviesService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  movies = this.moviesService.movies;
  totalLikes = this.moviesService.totalLikes;
  avgRating = this.moviesService.avgRating;

  ngOnInit() {
    // console.log('this is the query param', this.route.snapshot.queryParams);

    const sortBy = this.route.snapshot.queryParams['_sort'];

    this.moviesService.getMovies(sortBy);

    this.route.queryParams.subscribe((value) => {
      console.log('this is the new value of the query params:', value);
      const sortBy = value['_sort'];
      this.moviesService.getMovies(sortBy);
    });
  }

  onMovieClick(movie: Movie) {
    console.log(movie);

    this.moviesService.movieSelect(movie);

    //Navigate to the proper details page
    this.router.navigate(['movies', movie.id]);
    // this.router.navigateByUrl(`/movies/${movie.id}`);
  }
  onSortClick(sortBy: 'rating' | 'likeCount') {
    this.router.navigate([], {
      queryParams: {
        _sort: sortBy,
      },
    });
  }

  resetSort() {
    this.router.navigate([]);
  }
}
