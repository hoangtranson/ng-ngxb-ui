import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'button',
        component: ButtonComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule { }