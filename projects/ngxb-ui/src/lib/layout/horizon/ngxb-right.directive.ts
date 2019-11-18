import { Directive, ElementRef } from '@angular/core';
import { ClassBaseComponent } from '../../shared/abstracts';

@Directive({
  selector: '[ngxb-horizon-right]'
})
export class NgxbRightDirective extends ClassBaseComponent {

  constructor(public elementRef: ElementRef) {
    super(elementRef, 'level-right');
  }
  
}
