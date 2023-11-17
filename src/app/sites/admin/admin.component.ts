import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LoginCardComponent } from '../Login/Components/login-card.component';
import { ApiService, CommonService } from 'src/app/services/service.index';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  // Variable para controlar la visibilidad del sidebar
  sidebarVisible = false;

  constructor( private _dialog: MatDialog, private _common: CommonService, private _api: ApiService ) {

  }

  // Función para alternar la visibilidad del sidebar
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }





}
