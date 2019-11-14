import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    ButtonComponent, 
    LandingComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [
    LandingComponent,
    ButtonComponent
  ]
})
export class ComponentsModule { }
