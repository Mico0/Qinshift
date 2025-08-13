import { Routes } from '@angular/router';
import { Home } from './feature/home/home';
import { About } from './feature/about/about';
import { AddMovie } from './feature/movies/components/add-movie/add-movie';
import { MovieList } from './feature/movies/components/movie-list/movie-list';
import { MovieDetails } from './feature/movies/components/movie-details/movie-details';
import { NotFound } from './core/components/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'movies',
    component: MovieList,
  },
  {
    path: 'movies/:id',
    component: MovieDetails,
  },
  {
    path: 'add-movie',
    component: AddMovie,
  },
  {
    //** means catch all routes that weren't matched above
    path: '**',
    component: NotFound,
  },
];
