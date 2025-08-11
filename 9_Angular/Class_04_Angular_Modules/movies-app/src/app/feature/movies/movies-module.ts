import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieList } from './components/movie-list/movie-list';
import { MovieItem } from './components/movie-item/movie-item';
import { MovieDetails } from './components/movie-details/movie-details';
import { MoviesPage } from './movies-page/movies-page';

@NgModule({
  declarations: [MovieList, MovieItem, MovieDetails, MoviesPage],
  imports: [CommonModule],
  exports: [MoviesPage],
})
export class MoviesModule {}
