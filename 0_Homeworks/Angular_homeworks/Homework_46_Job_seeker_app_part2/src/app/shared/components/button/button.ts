import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  text = input.required<string>();
  icon = input.required<string>();
  btnClick = output();

  chosenIcon = '';

  ngOnInit() {
    this.setIcon(this.icon());
  }

  setIcon(icon: string) {
    if (icon === 'send') {
      this.chosenIcon = 'fa-regular fa-paper-plane';
    }

    if (icon === 'more') {
      this.chosenIcon = 'fa-regular fa-circle-down';
    }
    if (icon === 'cancel') {
      this.chosenIcon = 'fa-solid fa-ban';
    }

    if (icon === 'sort') {
      this.chosenIcon = 'fa-solid fa-sort';
    }
    if (icon === 'edit') {
      this.chosenIcon = 'fa-regular fa-pen-to-square';
    }
  }

  onBtnClick() {
    this.btnClick.emit();
  }
}
