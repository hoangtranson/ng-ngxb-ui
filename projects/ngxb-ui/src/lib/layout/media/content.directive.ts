import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngxb-media-content]'
})
export class ContentDirective {

  constructor(public elementRef: ElementRef) { 
    (this._getHostElement() as HTMLElement).classList.add('media-content');
  }
  
  _getHostElement() {
    return this.elementRef.nativeElement;
  }

}
