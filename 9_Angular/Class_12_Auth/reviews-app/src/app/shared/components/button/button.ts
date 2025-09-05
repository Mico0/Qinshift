import { NgStyle } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgStyle],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  text = input<string>();
  style = input<{ [key: string]: string }>({});
  disabled = input(false);
  type = input<'button' | 'submit'>('button');

  btnClick = output();

  onBtnClick() {
    this.btnClick.emit();
  }
}
