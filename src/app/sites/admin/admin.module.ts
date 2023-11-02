import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AdminComponent } from './admin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
  ],
  exports: [
    AdminComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,

    AdminRoutingModule,

    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,

  ]
})
export class AdminModule { }
