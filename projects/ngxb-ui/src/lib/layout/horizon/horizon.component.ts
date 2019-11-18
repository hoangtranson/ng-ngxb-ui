import { Component, OnInit, ElementRef } from '@angular/core';
import { ClassBaseComponent } from '../../shared/abstracts';

@Component({
  selector: 'div[ngxb-horizon]',
  exportAs: 'ngxbHorizon',
  templateUrl: './horizon.component.html',
  styleUrls: ['./horizon.component.scss']
})
export class HorizonComponent extends ClassBaseComponent {

  constructor(public elementRef: ElementRef) {
    super(elementRef, 'level');
    if (this._hasHostAttributes('horizon-on-mobile')) {
      (this._getHostElement() as HTMLElement).classList.add(`is-mobile`);
    }
  }

}

@Component({
  selector: 'nav[ngxb-horizon]',
  exportAs: 'ngxbHorizon',
  templateUrl: './horizon.component.html',
  styleUrls: ['./horizon.component.scss']
})
export class NavHorizonComponent extends ClassBaseComponent {

  constructor(public elementRef: ElementRef) {
    super(elementRef, 'level');
    if (this._hasHostAttributes('horizon-on-mobile')) {
      (this._getHostElement() as HTMLElement).classList.add(`is-mobile`);
    }
  }

}
