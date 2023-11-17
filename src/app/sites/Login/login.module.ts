import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { LoginCardComponent } from './Components/login-card.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    LoginComponent,
    LoginCardComponent,
  ],
  exports: [
    LoginComponent,
    LoginCardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,

    LoginRoutingModule,

    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    MatDialogModule,
  ]
})
export class LoginModule { }
