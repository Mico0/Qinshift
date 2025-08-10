import { NgClass, NgStyle } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass, NgStyle],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  text = input<string>('');
  iconClass = input<string>('');
  style = input<{ [key: string]: string }>({});
  btnClick = output();
  disabled = input(false);
  type = input<'button' | 'submit'>('button');

  onBtnClick() {
    this.btnClick.emit();
  }
}
