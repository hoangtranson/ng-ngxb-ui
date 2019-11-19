import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { ImageComponent } from './image/image.component';


@NgModule({
  declarations: [
    ButtonComponent, 
    IconComponent, 
    ImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    IconComponent,
    ImageComponent
  ]
})
export class ElementsModule { }
