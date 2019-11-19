import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { ClassBaseComponent } from '../../shared/abstracts';

const SIZE_ATTRIBUTES = [
  'is-16',
  'is-24',
  'is-32',
  'is-48',
  'is-64',
  'is-96',
  'is-128'
];

@Component({
  selector: 'div[ngxb-image]',
  exportAs: 'ngxbImage',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent extends ClassBaseComponent implements OnInit {

  @Input() src;
  @ViewChild('imageEl', {static: true}) imageEl: ElementRef;
  
  constructor(public elementRef: ElementRef) { 
    super(elementRef, 'image');
    for (const attr of SIZE_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        const temp = attr.split('-');
        (this._getHostElement() as HTMLElement).classList.add(`${attr}x${temp[1]}`);
      }
    }
  }

  ngOnInit() {
    if (this._hasHostAttributes('rounded')) {
      (this.imageEl.nativeElement as HTMLElement).classList.add(`is-rounded`);
    }
  }

}
