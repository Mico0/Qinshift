import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieList } from './components/movie-list/movie-list';
import { MovieDetails } from './components/movie-details/movie-details';
import { MovieItem } from './components/movie-item/movie-item';
import { MoviesPage } from './movies-page/movies-page';
import { Button } from '../../shared/components/button/button';

@NgModule({
  //Module components/directives are always used in declarations
  declarations: [MovieList, MovieDetails, MovieItem, MoviesPage],
  //Standalone components must be imported in a moodule that the components of that module can use them
  imports: [CommonModule, Button],
  //If the module that imports this module needs to use any of the components/directives that are declared, they have to be expored
  exports: [MoviesPage],
})
export class MoviesModule {}
