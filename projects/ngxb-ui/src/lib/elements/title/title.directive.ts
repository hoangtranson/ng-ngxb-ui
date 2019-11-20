import { Directive, ElementRef } from '@angular/core';
import { ClassBaseComponent } from '../../shared/abstracts';

const SIZE_ATTRIBUTES = [
  'level-1',
  'level-2',
  'level-3',
  'level-4',
  'level-5',
  'level-6'
];

@Directive({
  selector: '[ngxb-title]'
})
export class TitleDirective extends ClassBaseComponent {

  constructor(public elementRef: ElementRef) { 
    super(elementRef, 'title');

    for (const attr of SIZE_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        const temp = attr.split('-');
        (this._getHostElement() as HTMLElement).classList.add(`is-${temp[1]}`);
      }
    }
  }

}
