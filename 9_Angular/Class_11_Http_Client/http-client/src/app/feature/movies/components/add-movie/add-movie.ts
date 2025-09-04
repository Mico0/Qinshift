import { Component, inject } from '@angular/core';
import { MovieForm } from '../movie-form/movie-form';
import { ReviewFormValue } from '../../models/movie-model';
import { MoviesService } from '../../../../core/services/movies-service';

@Component({
  selector: 'app-add-movie',
  imports: [MovieForm],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.scss',
})
export class AddMovie {
  private moviesService = inject(MoviesService);

  onAddMovie(value: ReviewFormValue) {
    console.log('From the add movie parent', value);
    this.moviesService.createMovie(value);
  }
}
