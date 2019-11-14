import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    LandingComponent, 
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports: [
    LandingComponent, 
    ButtonComponent
  ]
})
export class ElementsModule { }
