import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing-module';
import { MovieList } from './components/movie-list/movie-list';
import { MovieItem } from './components/movie-item/movie-item';
import { MovieDetails } from './components/movie-details/movie-details';
import { AddMovie } from './components/add-movie/add-movie';

@NgModule({
  declarations: [MovieList, MovieItem, MovieDetails, AddMovie],
  imports: [CommonModule, MoviesRoutingModule],
})
export class MoviesModule {}
