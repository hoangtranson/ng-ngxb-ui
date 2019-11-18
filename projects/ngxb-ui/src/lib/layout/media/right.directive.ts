import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngxb-media-right]'
})
export class RightDirective {

  constructor(public elementRef: ElementRef) { 
    (this._getHostElement() as HTMLElement).classList.add('media-right');
  }
  
  _getHostElement() {
    return this.elementRef.nativeElement;
  }

}
