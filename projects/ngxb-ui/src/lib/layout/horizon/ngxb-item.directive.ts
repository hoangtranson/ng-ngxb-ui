import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngxb-horizon-item]'
})
export class NgxbItemDirective {

  constructor(public elementRef: ElementRef) { 
    (this._getHostElement() as HTMLElement).classList.add('level-item');
    if (this._hasHostAttributes('center')) {
      (this._getHostElement() as HTMLElement).classList.add(`has-text-centered`);
    }
  }

  _hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
  }

  _getHostElement() {
    return this.elementRef.nativeElement;
  }

}
