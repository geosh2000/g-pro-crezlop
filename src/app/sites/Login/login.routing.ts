import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { LoginComponent } from './login.component';


const sitesRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild( sitesRoutes )],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

