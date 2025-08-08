import { Component, input } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-item',
  imports: [],
  templateUrl: './movie-item.html',
  styleUrl: './movie-item.scss',
})
export class MovieItem {
  movie = input.required<Movie>();
}
