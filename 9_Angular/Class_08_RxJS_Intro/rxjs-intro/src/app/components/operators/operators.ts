import { Component, OnInit } from '@angular/core';
import { of, from, map, filter, take, skip, tap } from 'rxjs';

@Component({
  selector: 'app-operators',
  imports: [],
  templateUrl: './operators.html',
  styleUrl: './operators.scss',
})
export class Operators implements OnInit {
  usernames = ['Janko', 'Petko', 'Stanko', 'Milan', 'Leon', 'Ivan'];

  usernamesOfObs$ = of(this.usernames);

  usernamesFroObs$ = from(this.usernames);

  ngOnInit(): void {
    //* Map operator
    // this.usernamesFroObs$
    //   .pipe(map((value) => value + ' Arsov'))
    //   .subscribe((value) => {
    //     console.log(value);
    //   });

    //* Filter operator
    // this.usernamesFroObs$
    //   .pipe(filter((value) => value.startsWith('S')))
    //   .subscribe((value) => console.log(value));\

    //* Take
    // this.usernamesFroObs$
    //   .pipe(skip(2), take(3))
    //   .subscribe((value) => console.log(value));

    //* Tap
    // this.usernamesFroObs$
    //   .pipe(tap((value) => console.log('this is from the tap: ', value)))
    //   .subscribe((value) => console.log(value));

    this.usernamesFroObs$
      .pipe(
        filter((value) => value.startsWith('M')),
        map((value) => value + ' Ognjanoski'),
      )
      .subscribe((value) => console.log(value));
  }
}
