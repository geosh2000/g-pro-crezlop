import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GproComponent } from './gpro.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GproRoutingModule } from './gpro.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UnderConstructionComponent } from './under-construction/under-construction.component';


@NgModule({
  declarations: [
    GproComponent,
    UnderConstructionComponent,
  ],
  exports: [
    GproComponent,
    UnderConstructionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,

    GproRoutingModule,

    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,

  ]
})
export class GproModule { }
