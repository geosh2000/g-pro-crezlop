import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/service.index';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.css']
})
export class UnderConstructionComponent {

  constructor( private _api: ApiService ) { }

  checkLogin(): void {
    // this._api.checkLogin();
  }


}
