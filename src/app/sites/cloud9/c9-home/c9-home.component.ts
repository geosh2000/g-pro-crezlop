import { Component } from '@angular/core';
import { InitService } from 'src/app/services/service.index';

@Component({
  selector: 'app-c9-home',
  templateUrl: './c9-home.component.html',
  styleUrls: ['./c9-home.component.css']
})
export class C9HomeComponent {


  constructor(
    private _init: InitService
   ){

  }
}
