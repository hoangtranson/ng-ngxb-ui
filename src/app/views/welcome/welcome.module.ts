import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { LayoutModule } from 'projects/ngxb-ui/src/public-api';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    LayoutModule
  ]
})
export class WelcomeModule { }
