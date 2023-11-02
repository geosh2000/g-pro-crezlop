import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  // Variable para controlar la visibilidad del sidebar
  sidebarVisible = false;

  // Función para alternar la visibilidad del sidebar
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

}
