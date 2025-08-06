import { CssSelector } from '@angular/compiler';
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
  colorOutput = output<{ color: string }>();

  onTitleSend() {
    console.log('on title send called');
    this.titleOutput.emit('I AM THE TITLE FROM THE CHILD');
  }

  onChangeColor() {
    console.log('Color change called');
    this.colorOutput.emit({ color: 'red' });
  }
}
