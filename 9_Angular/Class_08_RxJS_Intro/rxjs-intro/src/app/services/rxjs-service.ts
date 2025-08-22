import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

const fruits = ['appple', 'pear', 'peach', 'grape', 'orange'];

@Injectable({
  providedIn: 'root',
})
export class RxjsService {
  nameArray = ['Milan', 'Gordana', 'Shemsa'];

  nameSubject$ = new Subject<string[]>();

  fruitsSubject$ = new BehaviorSubject<string[]>(fruits);

  getNames() {
    this.nameSubject$.next(this.nameArray);
  }

  addName(newName: string) {
    this.nameArray.push(newName);
    this.nameSubject$.next(this.nameArray);
  }

  addFruit(newFruit: string) {
    this.fruitsSubject$.next([...this.fruitsSubject$.value, newFruit]);
  }
}
