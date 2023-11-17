import { Component } from '@angular/core';
import { ApiService, CommonService } from 'src/app/services/service.index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor( private _api: ApiService, private _common: CommonService ) { }

  testLogin(): void {
    this._api.runGet('', 'auth/show');
  }

  getIp(){
    let ip = this._api.ip;

    this._common.showSnak( ip, 'success' );
  }



}
