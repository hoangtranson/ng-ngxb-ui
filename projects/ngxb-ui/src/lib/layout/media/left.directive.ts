import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngxb-media-left]'
})
export class LeftDirective {

  constructor(public elementRef: ElementRef) { 
    (this._getHostElement() as HTMLElement).classList.add('media-left');
  }
  
  _getHostElement() {
    return this.elementRef.nativeElement;
  }

}
