import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { HorizonComponent, NavHorizonComponent } from './horizon/horizon.component';
import { NgxbLeftDirective } from './horizon/ngxb-left.directive';
import { NgxbRightDirective } from './horizon/ngxb-right.directive';
import { NgxbItemDirective } from './horizon/ngxb-item.directive';

@NgModule({
  declarations: [
    ContainerComponent, 
    HorizonComponent,
    NavHorizonComponent, 
    NgxbLeftDirective, 
    NgxbRightDirective, 
    NgxbItemDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContainerComponent,
    NgxbLeftDirective,
    NgxbRightDirective,
    NavHorizonComponent,
    NgxbItemDirective
  ]
})
export class LayoutModule { }
