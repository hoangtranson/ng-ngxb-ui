import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [
    LandingComponent
  ]
})
export class ComponentsModule { }
