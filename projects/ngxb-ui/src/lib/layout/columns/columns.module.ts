import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnsDirective } from './columns.directive';
import { ColumnDirective } from './column.directive';


@NgModule({
  declarations: [
    ColumnsDirective, 
    ColumnDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColumnsDirective, 
    ColumnDirective
  ]
})
export class ColumnsModule { }
