import { Component, inject, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger-service';

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

  ngOnInit() {
    this.loggerService.logDetails('Header');
  }
}
