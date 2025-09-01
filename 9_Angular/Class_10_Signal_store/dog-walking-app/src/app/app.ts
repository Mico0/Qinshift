import { Component, signal } from '@angular/core';
import { DogManager } from './components/dog-manager/dog-manager';
import { Stats } from './components/stats/stats';

@Component({
  selector: 'app-root',
  imports: [DogManager, Stats],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('dog-walking-app');
  currentTab: 'manage' | 'stats' = 'manage';
}
