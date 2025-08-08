import { Component } from '@angular/core';
import { Header } from './core/components/header/header';
import { MovieList } from './feature/movies/components/movie-list/movie-list';
import { MovieDetails } from './feature/movies/components/movie-details/movie-details';

@Component({
  selector: 'app-root',
  imports: [Header, MovieList, MovieDetails],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
