import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ClassBaseComponent } from '../../shared/abstracts';

const COLOR_ATTRIBUTES = [
  'info',
  'success',
  'warning',
  'danger'
];

const SIZE_ATTRIBUTES = [
  'small',
  'medium',
  'large'
]

@Component({
  selector: 'span[ngxb-icon-fa]',
  exportAs: 'ngxbIconFa',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent extends ClassBaseComponent implements OnInit {

  @Input() name;
  iconClass: string;

  constructor(public elementRef: ElementRef) { 
    super(elementRef, 'icon');
    for (const attr of COLOR_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        (this._getHostElement() as HTMLElement).classList.add(`has-text-${attr}`);
      }
    }

    for (const attr of SIZE_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        (this._getHostElement() as HTMLElement).classList.add(`is-${attr}`);
      }
    }
  }

  ngOnInit() {
    this.iconClass = `fas fa-${this.name}`;
  }
}
