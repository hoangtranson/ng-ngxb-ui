import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngxb-banner-body]'
})
export class BannerBodyDirective {

  constructor(public elementRef: ElementRef) { 
    (this._getHostElement() as HTMLElement).classList.add('hero-body');
  }
  
  _getHostElement() {
    return this.elementRef.nativeElement;
  }

}
