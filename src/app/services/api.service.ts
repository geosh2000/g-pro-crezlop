import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { map, catchError, filter, share } from 'rxjs/operators'
import { BehaviorSubject, Subject } from 'rxjs';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommonService } from './service.index';

declare global {
  interface Window {
    RTCPeerConnection: RTCPeerConnection;
    mozRTCPeerConnection: RTCPeerConnection;
    webkitRTCPeerConnection: RTCPeerConnection;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  localIp = sessionStorage.getItem('LOCAL_IP');
  app = ''
  ip = ''

  public isLoading:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public newLogin:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public lastUrl: any

  private apiRestful:string = environment.apiURL;

  constructor(
                private http:HttpClient,
                private domSanitizer:DomSanitizer,
                private router: Router,
                private _common: CommonService
              ) {

      // Obtiene ip publica
      this.getPublicIp();
  }

  transform( url: string): any {
    return this.domSanitizer.bypassSecurityTrustUrl( url );
  }

  // Get Token from localstorage
  getToken(): string | boolean {

    // Validar si existe token en localstorage
    if( !localStorage.getItem('token') ){
      return false;
    }

    return localStorage.getItem('token');
  }

  // Generate headers
  getHeaders(): HttpHeaders {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Puedes cambiar '*' por la URL de tu servidor de desarrollo
      // Authorization: `Bearer ${ this.getToken() }`
    });

    // Obtener token, si es verdadero, agregarlo a los headers
    let token = this.getToken();
    if( token ){
      headers = headers.append('Authorization', `Bearer ${ token }`);
    }

    return headers;
  }

  // Check if token is invalid
  isTokenInvalid( res ): boolean {
    if( res['msg'] && res['msg']  == 'Token Expired' ){
      localStorage.removeItem('token');

      // Redirect to login
      this.router.navigate(['/login']);

      return false;
    }

    return true;
  }

  put( params, apiRoute ){

    let url = this.transform(`${ this.apiRestful }${ apiRoute }`)
    let body = JSON.stringify( params );
    let headers = this.getHeaders();

    return this.http.put( url.changingThisBreaksApplicationSecurity, body, { headers } )
        .pipe(
           share(),
           map( res => res ),
           filter( res => {
            return this.isTokenInvalid( res );
           })
        )
  }

  post( params, apiRoute ){

    let url = this.transform(`${ this.apiRestful }${ apiRoute }`)
    let body = JSON.stringify( params );
    let headers = this.getHeaders();

    return this.http.post( url.changingThisBreaksApplicationSecurity, body, { headers } )
        .pipe(
           map( res => res ),
           filter( res => {
            return this.isTokenInvalid( res );
           })
        )
  }

  delete( id, apiRoute ){

    let url = this.transform(`${ this.apiRestful }${ apiRoute }/${ id }`)
    let headers = this.getHeaders();

    return this.http.delete( url.changingThisBreaksApplicationSecurity, { headers } )
        .pipe(
           map( res => res ),
           filter( res => {
            return this.isTokenInvalid( res );
           })
        )
  }

  get( id, apiRoute ){

    let url = this.transform(`${ this.apiRestful }${ apiRoute }/${ id }`)
    let headers = this.getHeaders();

    return this.http.get( url.changingThisBreaksApplicationSecurity, { headers } )
        .pipe(
           map( res => res ),
           filter( res => {
            return this.isTokenInvalid( res );
           })
        )
  }

  externalGet( url ){

    return this.http.get( url )
        .pipe(
           map( res => res ),
           filter( res => {
            return this.isTokenInvalid( res );
           })
        )
  }

  runPost( data, url, callback: ((res) => void) | null = null, errorCallback: ((err) => void) | null = null ){
    this.post(data, url).subscribe(
      (res:any): void => {
        if( callback ){
          callback( res );
        }else{
          console.log( res );
        }
      },
      (err:any) => {
        this._common.showError( err );
        if (errorCallback) {
          errorCallback(err);
        }
      }
    );
  }

  runPut( data, url, callback: ((res) => void) | null = null, errorCallback: ((err) => void) | null = null ){
    this.put(data, url).subscribe(
      (res:any): void => {
        if( callback ){
          callback( res );
        }else{
          console.log( res );
        }
      },
      (err:any) => {
        this._common.showError( err );
        if (errorCallback) {
          errorCallback(err);
        }
      }
    );
  }

  runGet( id, url, callback: ((res) => void) | null = null, errorCallback: ((err) => void) | null = null){
    this.get(id, url).subscribe(
      (res:any): void => {
        if( callback ){
          callback( res );
        }else{
          console.log( res );
        }
      },
      (err:any) => {
        this._common.showError( err );
        if (errorCallback) {
          errorCallback(err);
        }
      }
    );
  }

  async getPublicIp(): Promise<void> {
    try {
      const response = await this.http.get<any>('https://api64.ipify.org?format=json').toPromise();
      this.ip = response.ip;
    } catch (error) {
      console.error('Error al obtener la dirección IP pública:', error);
    }
  }



}
