import { Component, OnInit, ElementRef } from '@angular/core';
import { SCREEN_ATTRIBUTES } from '../../shared/attributes';
import { ClassBaseComponent } from '../../shared/abstracts';

@Component({
  selector: 'div[ngxb-container]',
  exportAs: 'ngxbContainer',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent extends ClassBaseComponent {

  constructor(public elementRef: ElementRef) { 
    super(elementRef, 'container');
    for (const attr of SCREEN_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        (this._getHostElement() as HTMLElement).classList.add(`is-${attr}`);
      }
    }
  }
  
}
