import { Component, effect, inject, OnInit } from '@angular/core';
import { MovieForm } from '../movie-form/movie-form';
import { MoviesService } from '../../../../core/services/movies-service';
import { ActivatedRoute } from '@angular/router';
import { ReviewFormValue } from '../../models/movie-model';

@Component({
  selector: 'app-edit-movie',
  imports: [MovieForm],
  templateUrl: './edit-movie.html',
  styleUrl: './edit-movie.scss',
})
export class EditMovie implements OnInit {
  private moviesService = inject(MoviesService);
  private route = inject(ActivatedRoute);

  selectedMovie = this.moviesService.selectedMovie;

  ngOnInit() {
    const id: string = this.route.snapshot.params['id'];

    this.moviesService.geMovieById(id);
  }

  onEditMovie(value: ReviewFormValue) {
    console.log('Edit submitted');
    this.moviesService.updateMovie(this.selectedMovie().id, value);
  }
}
