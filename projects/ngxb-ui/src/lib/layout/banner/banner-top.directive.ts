import { Directive, ElementRef } from '@angular/core';
import { ClassBaseComponent } from '../../shared/abstracts';

@Directive({
  selector: '[ngxb-banner-top]'
})
export class BannerTopDirective extends ClassBaseComponent {

  constructor(public elementRef: ElementRef) {
    super(elementRef, 'hero-head');
  }
}
