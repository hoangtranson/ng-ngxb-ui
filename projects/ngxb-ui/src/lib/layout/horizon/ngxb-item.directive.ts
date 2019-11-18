import { Directive, ElementRef } from '@angular/core';
import { ClassBaseComponent } from '../../shared/abstracts';

@Directive({
  selector: '[ngxb-horizon-item]'
})
export class NgxbItemDirective extends ClassBaseComponent {

  constructor(public elementRef: ElementRef) {
    super(elementRef, 'level-item');
    if (this._hasHostAttributes('center')) {
      (this._getHostElement() as HTMLElement).classList.add(`has-text-centered`);
    }
  }

}
