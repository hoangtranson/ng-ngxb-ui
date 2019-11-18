import { 
  Component, 
  Input, 
  ViewEncapsulation, 
  ChangeDetectionStrategy, 
  ElementRef
} from '@angular/core';
import { COLOR_ATTRIBUTES, SIZE_ATTRIBUTES } from '../../shared/attributes';


@Component({
  selector: 'button[ngxb-button]',
  exportAs: 'ngxbButton',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  constructor(public elementRef: ElementRef) { 
    (this._getHostElement() as HTMLElement).classList.add('button');
    for (const attr of COLOR_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        (this._getHostElement() as HTMLElement).classList.add(`is-${attr}`);
      }
    }

    for (const attr of SIZE_ATTRIBUTES) {
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