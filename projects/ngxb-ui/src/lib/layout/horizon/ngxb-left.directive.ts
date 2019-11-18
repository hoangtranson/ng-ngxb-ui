import { Directive, ElementRef } from '@angular/core';
import { ClassBaseComponent } from '../../shared/abstracts';

@Directive({
  selector: '[ngxb-horizon-left]'
})
export class NgxbLeftDirective extends ClassBaseComponent {

  constructor(public elementRef: ElementRef) { 
    super(elementRef, 'level-left');
  }

}
