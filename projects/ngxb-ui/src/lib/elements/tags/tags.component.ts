import { Component, OnInit, Input, Output, ElementRef } from '@angular/core';
import { EventEmitter } from 'events';
import { ClassBaseComponent } from '../../shared/abstracts';
import { COLOR_ATTRIBUTES, SIZE_ATTRIBUTES } from '../../shared/attributes';

@Component({
  selector: 'div[ngxb-tags]',
  exportAs: 'ngxbITags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent extends ClassBaseComponent implements OnInit {
  @Input() source = [];
  @Output() selected: EventEmitter = new EventEmitter();
  tagClass: string = '';

  constructor(public elementRef: ElementRef) {
    super(elementRef, 'tags');

    for (const attr of SIZE_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        (this._getHostElement() as HTMLElement).classList.add(`are-${attr}`);
      }
    }
  }

  ngOnInit() {
    let color = '';
    for (const attr of COLOR_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        color = `is-${attr}`;
      }
    }
    this.tagClass = `tag ${color}`;
  }

}
