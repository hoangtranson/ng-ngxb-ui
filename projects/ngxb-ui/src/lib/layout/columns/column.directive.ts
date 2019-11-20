import { Directive, ElementRef } from '@angular/core';
import { ClassBaseComponent } from '../../shared/abstracts';

const SIZE_ATTRIBUTES = [
  'w-1',
  'w-2',
  'w-3',
  'w-4',
  'w-5',
  'w-6',
  'w-7',
  'w-8',
  'w-9',
  'w-10',
  'w-11',
  'w-12'
];

@Directive({
  selector: '[ngxb-column]'
})
export class ColumnDirective extends ClassBaseComponent {

  constructor(public elementRef: ElementRef) { 
    super(elementRef, 'column');

    for (const attr of SIZE_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        const temp = attr.split('-');
        (this._getHostElement() as HTMLElement).classList.add(`is-${temp[1]}`);
      }
    }
  }

}
