import { Directive, ElementRef } from '@angular/core';
import { ClassBaseComponent } from '../../shared/abstracts';

@Directive({
  selector: '[ngxb-banner-body]'
})
export class BannerBodyDirective extends ClassBaseComponent {

  constructor(public elementRef: ElementRef) { 
    super(elementRef, 'hero-body');
  }

}
