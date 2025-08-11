import { Component, effect, inject, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger-service';
import { MoviesService } from '../../services/movies-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  //Old school way of injecting dependecies in Angular
  // constructor(private loggerService: LoggerService) {}

  //New way and preffered of injecting dependencies in Angular
  private loggerService = inject(LoggerService);
  private moviesService = inject(MoviesService);

  totalLikes = this.moviesService.totalLikes;
  avgRating = this.moviesService.avgRating;

  constructor() {
    //Used for logging or for doing side effects when a signal changes its value
    //Very similar to computed but it doesn't return and it needs to be used in the constructor
    //Avoid setting signals in effects,we have other tools to achieve that
    effect(() => {
      console.log('the value of total likes is: ', this.totalLikes());
    });
  }

  ngOnInit() {
    this.loggerService.logDetails('Header');
  }
}
