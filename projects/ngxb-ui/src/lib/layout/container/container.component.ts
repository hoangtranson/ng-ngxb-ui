import { Component, OnInit, ElementRef } from '@angular/core';
import { SCREEN_ATTRIBUTES } from '../../shared/attributes';

const ATTRIBUTES = [
  'fluid',
  'widescreen',
  'fullhd'
]
@Component({
  selector: 'div[ngxb-container]',
  exportAs: 'ngxbContainer',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent{

  constructor(public elementRef: ElementRef) { 
    (this._getHostElement() as HTMLElement).classList.add('container');
    for (const attr of SCREEN_ATTRIBUTES) {
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
