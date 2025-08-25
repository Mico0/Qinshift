import { Component, OnInit } from '@angular/core';
import { filter, from, map, of, skip, take, tap } from 'rxjs';

@Component({
  selector: 'app-operators',
  imports: [],
  templateUrl: './operators.html',
  styleUrl: './operators.scss',
})
export class Operators implements OnInit {
  usernames = [
    'Janko',
    'Petko',
    'Stanko',
    'Lazar',
    'Krsto',
    'Stojan',
    'Blazhe',
    'Laste',
    'Ratko',
    'Sveto',
    'Risto',
    'Mile',
    'Boris',
    'Slavko',
    'Stefan',
    'Stamencho',
  ];

  usernamesOfObs$ = of(this.usernames);

  usernamesFromObs$ = from(this.usernames);

  ngOnInit() {
    //Map Operator
    // this.usernamesFromObs$
    //   .pipe(map((value) => value + ' Arsov'))
    //   .subscribe((value) => console.log(value));
    //Filter Operator
    // this.usernamesFromObs$
    //   .pipe(filter((value) => value.startsWith('S')))
    //   .subscribe((value) => console.log(value));
    // Take and skip
    // this.usernamesFromObs$
    //   .pipe(skip(2), take(3))
    //   .subscribe((value) => console.log(value));
    //Tap
    // this.usernamesFromObs$
    //   .pipe(tap((value) => console.log('this is from the tap: ', value)))
    //   .subscribe((value) => console.log(value));
    this.usernamesFromObs$
      .pipe(
        filter((value) => value.startsWith('R')),
        map((value) => value + ' Ristov'),
        skip(1),
      )
      .subscribe((value) => console.log(value));
  }
}
