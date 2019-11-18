import { Directive, ElementRef } from '@angular/core';
import { ClassBaseComponent } from '../../shared/abstracts';

@Directive({
  selector: '[ngxb-media-right]'
})
export class RightDirective extends ClassBaseComponent {

  constructor(public elementRef: ElementRef) { 
    super(elementRef, 'media-right');
  }
  
}
