import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appToggleAddress]',
})
export class ToggleAddressDirective implements OnInit {
  private elementRef = inject(ElementRef);

  isInitiallyOpen = input(false);

  addressDetailsEl: HTMLDivElement;

  isOpen = false;

  ngOnInit() {
    this.isOpen = this.isInitiallyOpen();

    this.addressDetailsEl =
      this.elementRef.nativeElement.querySelector('.address-details');

    this.addressDetailsEl.style.overflow = 'hidden';
    this.addressDetailsEl.style.transition = '0.2s ease-in';

    this.addressDetailsEl.style.maxHeight = this.isOpen ? '50px' : '0px';

    console.log(this.addressDetailsEl);
  }

  @HostListener('click', ['$event']) onClick(event: Event) {
    const target = event.target as HTMLElement;

    if (target.tagName !== 'H3') return;

    this.isOpen = !this.isOpen;

    this.addressDetailsEl.style.maxHeight = this.isOpen ? '50px' : '0px';
  }
}
