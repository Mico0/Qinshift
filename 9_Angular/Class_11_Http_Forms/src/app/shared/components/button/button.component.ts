import { NgClass, NgStyle } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
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
