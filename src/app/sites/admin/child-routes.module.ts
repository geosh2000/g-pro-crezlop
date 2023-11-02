import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const childRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    component: HomeComponent ,
    // canActivate: [ AuthGuard ],
    data: { title: 'G-Pro Connect by Geosh Global', role: 'public' }
  }
]



@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
