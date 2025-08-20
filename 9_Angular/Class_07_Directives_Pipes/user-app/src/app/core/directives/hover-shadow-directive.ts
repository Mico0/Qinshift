import {
  Directive,
  ElementRef,
  Host,
  HostListener,
  inject,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHoverShadow]',
})
export class HoverShadowDirective implements OnInit {
  // Element ref is injected and it will have a value of an object with a property called nativeElement which is the element on which the directive is applied
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngOnInit() {
    console.log('hover shadow directive on init');
    console.log(this.elementRef);

    // this.elementRef.nativeElement.style.transition = '0.1s ease-in';

    //Renderer way of changing styles
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'transition',
      '0.1s ease-in',
    );

    //Use renderer.listen if you want to listen on the document or you don't want to use HostListener
    // this.renderer.listen('document', 'click', () => {
    //   console.log('document clicked');
    // });
    this.renderer.listen(this.elementRef.nativeElement, 'click', () => {
      console.log('element clicked through renderer listener');
    });

    this.elementRef.nativeElement.addEventListener('click', () => {
      console.log('normal vanilla js listener');
    });
  }

  @HostListener('click') onClick() {
    console.log('the host element has been clicked');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.boxShadow =
      '0 3px 10px rgba(0,0,0,0.36), 0 3px 10px rgba(0,0,0,0.33)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.boxShadow = 'none';
  }
}
