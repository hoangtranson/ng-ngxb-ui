import { Directive, ElementRef } from '@angular/core';
import { ClassBaseComponent } from '../../shared/abstracts';

@Directive({
  selector: '[ngxb-columns]'
})
export class ColumnsDirective extends ClassBaseComponent {

  constructor(public elementRef: ElementRef) { 
    super(elementRef, 'columns');

    // for (const attr of SIZE_ATTRIBUTES) {
    //   if (this._hasHostAttributes(attr)) {
    //     const temp = attr.split('-');
    //     (this._getHostElement() as HTMLElement).classList.add(`is-${temp[1]}`);
    //   }
    // }
  }

}
