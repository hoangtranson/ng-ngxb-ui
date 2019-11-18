import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ButtonComponent } from './button/button.component';
import { ElementsModule as Elements, LayoutModule } from 'projects/ngxb-ui/src/public-api';


@NgModule({
  declarations: [
    LandingComponent, 
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    Elements,
    LayoutModule
  ],
  exports: [
    LandingComponent, 
    ButtonComponent
  ]
})
export class ElementsModule { }
