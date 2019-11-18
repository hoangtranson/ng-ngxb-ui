import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngxb-right]'
})
export class NgxbRightDirective {

  constructor(public elementRef: ElementRef) { 
    (this._getHostElement() as HTMLElement).classList.add('level-right');
  }
  
  _getHostElement() {
    return this.elementRef.nativeElement;
  }

}
