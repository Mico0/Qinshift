import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() text = '';
  @Input() iconClass = '';
  @Input() style: { [key: string]: string } = {};
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' = 'button';

  @Output() btnClick = new EventEmitter<void>();

  onBtnClick() {
    this.btnClick.emit();
  }
}
