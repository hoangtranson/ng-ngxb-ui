import { Component, OnInit, ElementRef } from '@angular/core';
import { BASIC_COLOR_ATTRIBUTES, BANNER_SIZE_ATTRIBUTES } from '../../shared/attributes';
import { ClassBaseComponent } from '../../shared/abstracts';

@Component({
  selector: 'div[ngxb-banner]',
  exportAs: 'ngxbBanner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent extends ClassBaseComponent {

  constructor(public elementRef: ElementRef) {
    super(elementRef, 'hero');
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
}
