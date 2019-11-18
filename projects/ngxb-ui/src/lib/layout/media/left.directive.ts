import { Directive, ElementRef } from '@angular/core';
import { ClassBaseComponent } from '../../shared/abstracts';

@Directive({
  selector: '[ngxb-media-left]'
})
export class LeftDirective extends ClassBaseComponent {

  constructor(public elementRef: ElementRef) { 
    super(elementRef, 'media-left');
  }
  
}
