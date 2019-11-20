import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { ImageComponent } from './image/image.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    ButtonComponent, 
    IconComponent, 
    ImageComponent, 
    AlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    IconComponent,
    ImageComponent,
    AlertComponent
  ]
})
export class ElementsModule { }
