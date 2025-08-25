import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appToggleReadMore]',
})
export class ToggleReadMore implements OnInit {
  private elementRef = inject(ElementRef);

  readMoreBtn: HTMLButtonElement;

  isOpen = false;

  ngOnInit() {
    console.log(this.elementRef);

    this.readMoreBtn = this.elementRef.nativeElement.querySelector(
      '.card-controls .read-more'
    );

    console.log(this.readMoreBtn);
  }
}
