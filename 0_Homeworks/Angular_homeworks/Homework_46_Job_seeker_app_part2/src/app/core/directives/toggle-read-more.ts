import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appToggleReadMore]',
  host: {
    '(click)': 'expandReadMore($event)',
  },
})
export class ToggleReadMore implements OnInit {
  private elementRef = inject(ElementRef);

  belowTheFold: HTMLDivElement;

  isOpen = false;

  ngOnInit() {
    // console.log(this.elementRef);

    this.belowTheFold =
      this.elementRef.nativeElement.querySelector('.below-the-fold');

    this.belowTheFold.style.maxHeight = this.isOpen ? '20rem' : '0px';

    // console.log(this.belowTheFold);
  }

  expandReadMore(event: Event) {
    const button = event.target as HTMLButtonElement;

    if (!button.classList.contains('read-more')) {
      return;
    } else {
      this.isOpen = !this.isOpen;

      this.belowTheFold.style.maxHeight = this.isOpen ? '20rem' : '0px';
    }
  }
}
