import { Directive, ElementRef } from '@angular/core';
import { ClassBaseComponent } from '../../shared/abstracts';

@Directive({
  selector: '[ngxb-banner-bottom]'
})
export class BannerBottomDirective extends ClassBaseComponent {

  constructor(public elementRef: ElementRef) { 
    super(elementRef, 'hero-foot');
  }

}
