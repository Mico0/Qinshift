import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  text = input<string>('');
  btnClass = input<string>('');
  onClick = output();

  onBtnClick() {
    this.onClick.emit();
  }
}
