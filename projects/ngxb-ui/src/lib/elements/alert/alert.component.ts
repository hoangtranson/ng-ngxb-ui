import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ClassBaseComponent } from '../../shared/abstracts';

const COLOR_ATTRITUBES = [
  "primary",
  "link",
  "info",
  "success",
  "warning",
  "danger"
]

@Component({
  selector: 'div[ngxb-alert]',
  exportAs: 'ngxbAlert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent extends ClassBaseComponent implements OnInit {
  @Input() closable;

  constructor(public elementRef: ElementRef) {
    super(elementRef, 'notification');
    for (const attr of COLOR_ATTRITUBES) {
      if (this._hasHostAttributes(attr)) {
        (this._getHostElement() as HTMLElement).classList.add(`is-${attr}`);
      }
    }
  }

  ngOnInit() {
  }

  removeAlert() {
    if (this.closable) {
      (this._getHostElement() as HTMLElement).remove();
    }
  }

}
