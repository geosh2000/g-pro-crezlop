import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { Cloud9Component } from './cloud9.component';


const cloud9Routes: Routes = [
    { 
        path: 'cloud9', 
        component: Cloud9Component,
        // canActivate: [ AuthGuard ],
        loadChildren: () => import('./child-routes.module').then( m => m.ChildRoutesModule )
    },
];

@NgModule({
  imports: [RouterModule.forChild( cloud9Routes )],
  exports: [RouterModule]
})
export class Cloud9RoutingModule { }

