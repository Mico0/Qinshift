import { Component, inject } from '@angular/core';
import { DogStore } from '../../store/dog.store';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class Stats {
  store = inject(DogStore);
}
