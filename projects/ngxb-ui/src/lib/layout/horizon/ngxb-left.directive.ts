import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngxb-left]'
})
export class NgxbLeftDirective {

  constructor(public elementRef: ElementRef) { 
    (this._getHostElement() as HTMLElement).classList.add('level-left');
  }
  
  _getHostElement() {
    return this.elementRef.nativeElement;
  }
}
