import { Component, OnInit, ElementRef } from '@angular/core';
import { BASIC_COLOR_ATTRIBUTES, BANNER_SIZE_ATTRIBUTES } from '../../shared/attributes';

@Component({
  selector: 'div[ngxb-banner]',
  exportAs: 'ngxbBanner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  constructor(public elementRef: ElementRef) { 
    (this._getHostElement() as HTMLElement).classList.add('hero');
    for (const attr of BASIC_COLOR_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        (this._getHostElement() as HTMLElement).classList.add(`is-${attr}`);
      }
    }

    for (const attr of BANNER_SIZE_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        (this._getHostElement() as HTMLElement).classList.add(`is-${attr}`);
      }
    }
  }

  _hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
  }

  _getHostElement() {
    return this.elementRef.nativeElement;
  }
  
}
