import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { AdminComponent } from './admin.component';
import { authGuard } from 'src/app/Guards/auth.guard';


const sitesRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [ authGuard ],
        loadChildren: () => import('./child-routes.module').then( m => m.ChildRoutesModule )
    },
];

@NgModule({
  imports: [RouterModule.forChild( sitesRoutes )],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

