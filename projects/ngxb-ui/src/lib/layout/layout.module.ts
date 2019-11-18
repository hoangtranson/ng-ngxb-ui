import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { HorizonComponent, NavHorizonComponent } from './horizon/horizon.component';
import { NgxbLeftDirective } from './horizon/ngxb-left.directive';
import { NgxbRightDirective } from './horizon/ngxb-right.directive';
import { NgxbItemDirective } from './horizon/ngxb-item.directive';
import { MediaComponent } from './media/media.component';
import { LeftDirective } from './media/left.directive';
import { ContentDirective } from './media/content.directive';
import { RightDirective } from './media/right.directive';

@NgModule({
  declarations: [
    ContainerComponent, 
    HorizonComponent,
    NavHorizonComponent, 
    NgxbLeftDirective, 
    NgxbRightDirective, 
    NgxbItemDirective, 
    MediaComponent, 
    LeftDirective, 
    ContentDirective, 
    RightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContainerComponent,
    NgxbLeftDirective,
    NgxbRightDirective,
    NavHorizonComponent,
    NgxbItemDirective,
    MediaComponent,
    LeftDirective, 
    ContentDirective, 
    RightDirective
  ]
})
export class LayoutModule { }
