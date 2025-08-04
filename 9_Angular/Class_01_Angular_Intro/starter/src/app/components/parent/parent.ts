import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
})
export class Parent {
  parentTitle = 'I COME FROM THE PARENT';

  titleFromChild = '';

  onTitleRecieve(newTitle: string) {
    console.log('Event recieved from the child');
    this.titleFromChild = newTitle;
  }
}
