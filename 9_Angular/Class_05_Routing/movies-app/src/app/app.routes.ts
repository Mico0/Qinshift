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
  // {
  //   path: 'movies',
  //   component: MovieList,
  // },
  {
    path: 'movies',
    //* The import must be a correct path to the component ts file
    loadComponent: () =>
      import('./feature/movies/components/movie-list/movie-list').then(
        (c) => c.MovieList,
      ),
  },
  {
    path: 'movies/:id',
    loadComponent: () =>
      import('./feature/movies/components/movie-details/movie-details').then(
        (c) => c.MovieDetails,
      ),
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
