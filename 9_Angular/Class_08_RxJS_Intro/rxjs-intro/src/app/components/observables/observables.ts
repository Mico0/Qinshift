import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { from, interval, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  imports: [AsyncPipe],
  templateUrl: './observables.html',
  styleUrl: './observables.scss',
})
export class Observables {
  numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //From takes an array and emits every element individually, after which it completes
  fromObs$ = from(this.numArr);

  //Of takes in a random number of arguments and emits them one by one
  ofObs$ = of(this.numArr, 'borche', 100, false, null, { test: 'rest' });

  //Manual Obserbale
  numberEmitterObs$ = new Observable((emitter) => {
    emitter.next(1);
    emitter.next(2);
    emitter.next(3);
    // emitter.complete();
    emitter.next(4);
    emitter.next(5);
    emitter.error('something went terribly wrong');
    emitter.next(6);
    emitter.next(7);
    emitter.next(8);
    emitter.next(9);
    emitter.next(10);
    emitter.complete();
  });

  intervalObs$ = interval(1000);

  intervalAsync$ = interval(500);

  intervalSubscription: Subscription;

  ngOnInit() {
    // this.fromObs$.subscribe((value) => {
    //   console.log('from the fromObs subscripiton: ', value);
    // });
    // this.fromObs$.subscribe({
    //   next: (value) => {
    //     console.log('next value:', value);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     console.log('completed observable');
    //   },
    // });
    // this.ofObs$.subscribe((value) => {
    //   console.log('ofObs value: ', value);
    // });
    this.numberEmitterObs$.subscribe({
      next: (value) => console.log('manual obs: ', value),
      error: (err) => console.log('manual obs error: ', err),
      complete: () => console.log('obs completed'),
    });
    this.intervalSubscription = this.intervalObs$.subscribe((value) => {
      console.log(value);
    });
  }

  ngOnDestroy() {
    this.intervalSubscription.unsubscribe();
  }
}
