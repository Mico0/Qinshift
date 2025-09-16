import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/components/header/header';
import { Footer } from './core/components/footer/footer';
import { Spinner } from './core/components/spinner/spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Spinner],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('reviews-app');
}
