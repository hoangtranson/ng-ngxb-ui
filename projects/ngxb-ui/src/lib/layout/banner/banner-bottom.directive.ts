import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngxb-banner-bottom]'
})
export class BannerBottomDirective {

  constructor(public elementRef: ElementRef) { 
    (this._getHostElement() as HTMLElement).classList.add('hero-foot');
  }
  
  _getHostElement() {
    return this.elementRef.nativeElement;
  }

}
