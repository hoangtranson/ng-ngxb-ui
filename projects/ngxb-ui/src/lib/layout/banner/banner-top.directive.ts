import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngxb-banner-top]'
})
export class BannerTopDirective {

  constructor(public elementRef: ElementRef) { 
    (this._getHostElement() as HTMLElement).classList.add('hero-head');
  }
  
  _getHostElement() {
    return this.elementRef.nativeElement;
  }

}
