import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ButtonComponent } from './button/button.component';
import { ButtonModule, LayoutModule } from 'projects/ngxb-ui/src/public-api';


@NgModule({
  declarations: [
    LandingComponent, 
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    ButtonModule,
    LayoutModule
  ],
  exports: [
    LandingComponent, 
    ButtonComponent
  ]
})
export class ElementsModule { }
