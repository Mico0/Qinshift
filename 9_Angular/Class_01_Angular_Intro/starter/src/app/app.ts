import { Component } from '@angular/core';
import { Person } from './models/person.model';
import { last } from 'rxjs';
import { Parent } from './components/parent/parent';

// const test = 'random string';

enum Course {
  REACT = 'REACT',
  ANGULAR = 'ANGULAR',
}

@Component({
  selector: 'app-root', //This is the selector we use when adding this component in other html files
  templateUrl: './app.html', //This is the url to the template for this component
  styleUrl: './app.scss', //This is the url to the scss file for this component
  imports: [Parent], //We need to import other components before we can use them in the template
})
export class App {
  title = 'STARTER G1';
  year = 2025;
  // test = test;

  person: Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 45,
    country: 'USA',
  };

  backgroundColor = 'lightblue';

  imgSrc =
    'https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png';

  isBtnDisabled = true;

  isHeadingShown = false;

  fruits = ['apples', 'oranges', 'pears', 'cherries'];

  course = Course.REACT;

  inputValue = '';

  printFullName(firstName: string, lastName: string) {
    console.log(`The person's full name is ${firstName} ${lastName}`);
  }

  onChangeCourse() {
    this.course =
      this.course === Course.ANGULAR ? Course.REACT : Course.ANGULAR;
    console.log('Course', this.course);
  }

  onInputChange(event: Event) {
    console.log('input change method called');

    const target = event.target as HTMLInputElement;

    this.inputValue = target.value;

    console.log(event);
  }
}
