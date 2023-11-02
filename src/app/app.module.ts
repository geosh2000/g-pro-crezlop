import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { GproModule } from './sites/gpro/gpro.module';
import { LoginModule } from './sites/Login/login.module';
import { AdminModule } from './sites/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AppRoutingModule,

    GproModule,
    LoginModule,
    AdminModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
