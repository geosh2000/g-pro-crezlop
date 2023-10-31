import { Component, OnInit } from '@angular/core';
import { ApisService } from '../services/apis.service';
import { PagosService } from '../services/pagos.service';
import { ApiService } from '../services/api.service';
import { InitService } from 'src/app/services/init.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FlavorDialogComponent } from '../modals/flavor-dialog/flavor-dialog.component';


@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  pagosRef = {}
  reference = ''

  constructor( public _api: ApiService, public lapi: ApisService, 
    public dialog: MatDialog,
    public pagos: PagosService, private _init: InitService, public route: ActivatedRoute ){
    }
    
  ngOnInit() {

    // Detectar cambios en ruta y disparar funcion getConfig()
    this.route.params.subscribe( params => {
                                            this.getConfig( params['client'] )
                                          }
                                );
    
    // this.getParam()
    this.lapi.fetchAndParseCSV()
  }

  // Funcion async para obtener parametro de route y al obtenerlo disparar funcion getConfig()
  async getParam(){
    this.reference = await this.route.snapshot.paramMap.get('client');
    if( this.reference != '' ){
      this.pagosRef = {}
      this.getConfig( this.reference )
    }else{
      this.pagosRef = {}
    }
  }

  // Obtener configuración de pagos
  getConfig( reference ){
    this._api.restfulPut( {catalog:"origenPagos",filter:[{reference}]}, 'Lists/catalog' )
                .subscribe( res => {

                  this.pagosRef = res['data'][0] 

                }, err => {

                  this.pagosRef = {}

                  const error = err.error;
                  console.error(err.statusText, error.msg);
                  this._init.snackbar('error', err.statusText, error.msg )

                  return false

                });
  }

  openFlavorDialog( sabores ) {
    const dialogRef = this.dialog.open(FlavorDialogComponent, {
      data: {
        sabores
      },
      minWidth: '35vw'
    });
  }
  
  

  showFlavors( sabores ) {
    this.openFlavorDialog( sabores );
  }
  

}
