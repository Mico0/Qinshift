import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {
  parentTitle = input<string>();
  titleOutput = output<string>();

  onTitleSend() {
    console.log('on title send called');
    this.titleOutput.emit('I AM THE TITLE FROM THE CHILD');
  }
}
