import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie-model';

@Component({
  selector: 'app-movie-item',
  standalone: false,
  templateUrl: './movie-item.html',
  styleUrl: './movie-item.scss',
})
export class MovieItem {
  @Input() movie: Movie = null;
}
