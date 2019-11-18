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
import { BannerComponent } from './banner/banner.component';
import { BannerBodyDirective } from './banner/banner-body.directive';
import { BannerTopDirective } from './banner/banner-top.directive';
import { BannerBottomDirective } from './banner/banner-bottom.directive';

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
    RightDirective, 
    BannerComponent, 
    BannerBodyDirective, 
    BannerTopDirective, 
    BannerBottomDirective
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
    RightDirective,
    BannerComponent, 
    BannerBodyDirective,
    BannerTopDirective, 
    BannerBottomDirective
  ]
})
export class LayoutModule { }
