import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { ImageComponent } from './image/image.component';
import { AlertComponent } from './alert/alert.component';
import { TagsComponent } from './tags/tags.component';
import { TitleDirective } from './title/title.directive';
import { SubTitleDirective } from './title/sub-title.directive';


@NgModule({
  declarations: [
    ButtonComponent, 
    IconComponent, 
    ImageComponent, 
    AlertComponent, 
    TagsComponent, 
    TitleDirective,
    SubTitleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    IconComponent,
    ImageComponent,
    AlertComponent,
    TagsComponent,
    TitleDirective,
    SubTitleDirective
  ]
})
export class ElementsModule { }
