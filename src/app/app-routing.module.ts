import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeModule } from 'src/app/views/welcome/welcome.module';
import { ComponentsModule } from 'src/app/views/components/components.module';
import { ElementsModule } from 'src/app/views/elements/elements.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => WelcomeModule
  },
  {
    path: 'components',
    loadChildren: () => ComponentsModule
  },
  {
    path: 'elements',
    loadChildren: () => ElementsModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
