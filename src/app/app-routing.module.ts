import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotAllowedComponent } from './pages/not-allowed/not-allowed.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GproRoutingModule } from './sites/gpro/gpro.routing';


const routes: Routes = [

  { path: 'notAllowed', component: NotAllowedComponent, data: { title: 'Acceso Restringido' } },
  { path: '**', component: NotFoundComponent, data: { title: 'Módulo no encontrado' } },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled'}),

    GproRoutingModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
