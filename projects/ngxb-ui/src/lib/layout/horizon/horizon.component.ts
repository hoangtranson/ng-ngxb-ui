import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'div[ngxb-horizon]',
  exportAs: 'ngxbHorizon',
  templateUrl: './horizon.component.html',
  styleUrls: ['./horizon.component.scss']
})
export class HorizonComponent {

  constructor(public elementRef: ElementRef) { 
    (this._getHostElement() as HTMLElement).classList.add('level');
    if (this._hasHostAttributes('horizon-on-mobile')) {
      (this._getHostElement() as HTMLElement).classList.add(`is-mobile`);
    }
  }

  _hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
  }

  _getHostElement() {
    return this.elementRef.nativeElement;
  }
}

@Component({
  selector: 'nav[ngxb-horizon]',
  exportAs: 'ngxbHorizon',
  templateUrl: './horizon.component.html',
  styleUrls: ['./horizon.component.scss']
})
export class NavHorizonComponent {

  constructor(public elementRef: ElementRef) { 
    (this._getHostElement() as HTMLElement).classList.add('level');
    if (this._hasHostAttributes('horizon-on-mobile')) {
      (this._getHostElement() as HTMLElement).classList.add(`is-mobile`);
    }
  }

  _hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
  }

  _getHostElement() {
    return this.elementRef.nativeElement;
  }
}
