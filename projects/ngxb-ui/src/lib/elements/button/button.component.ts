import { 
  Component, 
  Input, 
  ViewEncapsulation, 
  ChangeDetectionStrategy, 
  ElementRef
} from '@angular/core';
import { COLOR_ATTRIBUTES, SIZE_ATTRIBUTES } from '../../shared/attributes';
import { ClassBaseComponent } from '../../shared/abstracts';


@Component({
  selector: 'button[ngxb-button]',
  exportAs: 'ngxbButton',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent extends ClassBaseComponent {

  constructor(public elementRef: ElementRef) {
    super(elementRef, 'button');
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
}
