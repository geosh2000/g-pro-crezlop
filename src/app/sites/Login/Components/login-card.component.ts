import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService, CommonService } from 'src/app/services/service.index';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css'],
})
export class LoginCardComponent implements OnInit {

  @Input() redirect: boolean = false; // Propiedad de entrada para controlar el redireccionamiento

  // FormGroup para login
  loginForm:FormGroup;

  constructor( private _api: ApiService, private route: Router, private location: Location, private fb: FormBuilder,
                private _common: CommonService
    ) {

    // Crea el formulario con campos y validadores
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  ngOnInit(): void {
    // add initialization logic here
  }

  // Funcion para guardar en localstorage el token
  saveToken(token: string, userData: Array<any>): void {
    localStorage.setItem('token', token);

    // Guardar userData en localstorage
    localStorage.setItem('userData', JSON.stringify( userData ));
  }

  // Obtener ruta anterior desde Location
  lastUrl(): void {
    const location = this.location as any;
    const state = location.getState() as any;
    this._api.lastUrl = state.navigationId > 1 ? location.getPreviousNavigation().extractedUrl.toString() : null;
  }

  // Post de login
  loginPost( data: any ) {

    if( this.loginForm.invalid ){
      console.error('Formulario invalido')
      return;
    }

    let loginData = data.value
    loginData['ip'] = this._api.ip

    this._api.runPost( loginData, 'login',
      (res:any) => {
        this.saveToken( res.token, res.userData );

        this._common.showSnak( res.msg, 'success' );


        // Si redirect es true, redireccioa
        if( this.redirect ){
          if( this._api.lastUrl == null ){
            this.route.navigate(['/admin']);
          }else{
            this.route.navigateByUrl( this._api.lastUrl );
          }
        }else{
          // Si redirect es false, reload
          window.location.reload();
        }
        return
      },
      (err:any) => {
        // Delete localstorage token
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
      }
    );
  }

}
