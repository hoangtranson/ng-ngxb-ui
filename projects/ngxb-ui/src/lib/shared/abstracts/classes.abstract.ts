import { ElementRef } from '@angular/core';

export abstract class ClassBaseComponent {
    constructor(public elementRef: ElementRef, _init_class: string = null) {
        if(_init_class) {
            (this._getHostElement() as HTMLElement).classList.add(_init_class);
        }
    }

    _hasHostAttributes(...attributes: string[]) {
        return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
    }

    _getHostElement() {
        return this.elementRef.nativeElement;
    }
}