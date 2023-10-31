import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CapitalizadoPipe } from '../pipes/capitalizado.pipe';
import { KeysPipe } from '../pipes/keys.pipe';
import { LowercasePipe } from '../pipes/lowercase.pipe';


@NgModule({
  declarations: [

    CapitalizadoPipe,
    LowercasePipe,
    KeysPipe,

  ],
  exports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
        
    CapitalizadoPipe,
    LowercasePipe,
    KeysPipe,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,


  ]
})
export class SharedModule { }
