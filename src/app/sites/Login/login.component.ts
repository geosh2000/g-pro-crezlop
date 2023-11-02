import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, CommonService } from 'src/app/services/service.index';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

        // si lastUrl es null, envía a inicio, si no, manda a lastUrl
        if( this._api.lastUrl == null ){
          this.route.navigate(['/admin']);
        }else{
          this.route.navigateByUrl( this._api.lastUrl );
        }
      },
      (err:any) => {
        // Delete localstorage token
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
      }
    );
  }

}
