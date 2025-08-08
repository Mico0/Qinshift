import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  counter = 0;

  logDetails(componentName: string) {
    this.counter = this.counter + 1;

    console.log(
      `The date is: ${new Date().toDateString()}, the component is: ${componentName} and the counter value is: ${this.counter}`,
    );
  }
}
