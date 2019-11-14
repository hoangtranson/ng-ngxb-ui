import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/views/components/components.module';
import { ElementsModule } from 'src/app/views/elements/elements.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    ElementsModule
  ],
  exports: [
    ComponentsModule,
    ElementsModule
  ]
})
export class ViewsModule { }
