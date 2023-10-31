import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { GproComponent } from './gpro.component';


const sitesRoutes: Routes = [
    { 
        path: 'gpro', 
        component: GproComponent,
        // canActivate: [ AuthGuard ],
        loadChildren: () => import('./child-routes.module').then( m => m.ChildRoutesModule )
    },
];

@NgModule({
  imports: [RouterModule.forChild( sitesRoutes )],
  exports: [RouterModule]
})
export class GproRoutingModule { }

