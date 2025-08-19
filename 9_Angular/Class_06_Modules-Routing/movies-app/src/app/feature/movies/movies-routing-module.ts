import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieList } from './components/movie-list/movie-list';
import { MovieDetails } from './components/movie-details/movie-details';
import { AddMovie } from './components/add-movie/add-movie';

//All routes in a child routing module inherit the url that was loaded in the add routing module and the url is carried over
const routes: Routes = [
  {
    path: '',
    component: MovieList,
  },
  {
    path: 'add',
    component: AddMovie,
  },
  {
    path: ':id',
    component: MovieDetails,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
