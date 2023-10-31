import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from 'src/app/guard/auth.guard';
import { Cloud9Component } from './cloud9.component';
import { C9HomeComponent } from './c9-home/c9-home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { PagosComponent } from './pagos/pagos.component';

const childRoutes: Routes = [
  { 
    path: '', 
    component: C9HomeComponent ,
    // canActivate: [ AuthGuard ],
    data: { title: 'Cloud9 Vaping', role: 'public' } 
  },

  { path: 'catalogo', redirectTo: '', pathMatch: 'full' },
  
  { 
    path: 'catalogo/:client', 
    component: CatalogoComponent ,
    // canActivate: [ AuthGuard ],
    data: { title: 'Cloud9 Vaping - Catalogo', role: 'public' } 
  },
  
  { path: 'pagos', redirectTo: '', pathMatch: 'full' },
  
  { 
    path: 'pagos/:client', 
    component: PagosComponent ,
    // canActivate: [ AuthGuard ],
    data: { title: 'Cloud9 Vaping - Catalogo', role: 'public' } 
  },
]



@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
