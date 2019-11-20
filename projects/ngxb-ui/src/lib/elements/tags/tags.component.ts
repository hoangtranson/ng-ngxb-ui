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
  @Input() closable: boolean = false;
  @Output() selected: EventEmitter = new EventEmitter();
  @Output() closed: EventEmitter = new EventEmitter();

  tagClass: string = '';
  deleteClass: string = '';

  constructor(public elementRef: ElementRef) {
    super(elementRef, 'tags');

    let tempDeleteClass = '';
    for (const attr of SIZE_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        (this._getHostElement() as HTMLElement).classList.add(`are-${attr}`);
        tempDeleteClass = `is-${attr}`;
      }
    }

    this.deleteClass = `delete ${tempDeleteClass}`.trim();
  }

  ngOnInit() {
    let color = '';
    let rounded = '';

    for (const attr of COLOR_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        color = `is-${attr}`;
      }
    }

    if (this._hasHostAttributes('rounded')) {
      rounded = `is-rounded`;
    }

    this.tagClass = `tag ${color} ${rounded}`.trim();
  }

  onClick(item) {
    this.selected.emit(item);
  }

  onCloseTag(item) {
    this.closed.emit(item);
  }
}
