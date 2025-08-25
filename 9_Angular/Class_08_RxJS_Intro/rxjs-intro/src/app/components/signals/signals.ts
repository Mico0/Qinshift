import { Component, effect, model, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, debounceTime, interval } from 'rxjs';

@Component({
  selector: 'app-signals',
  imports: [FormsModule],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
})
export class Signals {
  randomNum$ = new BehaviorSubject<number>(0);

  randomNum = toSignal(this.randomNum$);

  interval$ = interval(1000);

  interval = toSignal(this.interval$);

  inputValue = model<string>();

  inputValue$ = toObservable(this.inputValue);

  searchValue = signal('');

  constructor() {
    effect(() => {
      // console.log('this is the interval value: ', this.interval());
    });

    effect(() => {
      // console.log('THIS IS THE RANDOM NUM: ', this.randomNum());
    });
  }

  ngOnInit() {
    this.inputValue$.pipe(debounceTime(1000)).subscribe((value) => {
      console.log('in the inputValueSub');
      console.log('this is the delayed value: ', value);
      this.searchValue.set(value);
    });
  }

  onNumChange() {
    this.randomNum$.next(Math.random());
  }
}
