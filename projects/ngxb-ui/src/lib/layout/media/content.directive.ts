import { Directive, ElementRef } from '@angular/core';
import { ClassBaseComponent } from '../../shared/abstracts';

@Directive({
  selector: '[ngxb-media-content]'
})
export class ContentDirective extends ClassBaseComponent {

  constructor(public elementRef: ElementRef) {
    super(elementRef, 'media-content');
  }

}
