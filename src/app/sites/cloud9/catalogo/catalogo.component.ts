import { Component, OnInit } from '@angular/core';
import { InitService } from 'src/app/services/service.index';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  products = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Desc 1',
      image: 'url1',
      flavors: ['Sabor1', 'Sabor2'],
      price: '$100'
    },
    // Otros productos
  ];

  // URL del archivo CSV en línea 
  csvURL = 'https://docs.google.com/spreadsheets/d/1H8O3raaIIt_mYp6GwzQFVRBYVyhWHAlSuRzB63LAmeE/gviz/tq?tqx=out:csv&gid=1192024511';


  constructor(
    private _init: InitService,
    public lapi: ApisService,
   ){

   }
  ngOnInit(): void {
    this.lapi.fetchAndParseCSV()
  }

  buyProduct(id: number) {
    console.log(`Producto ${id} comprado.`);
  }

  
  




}
