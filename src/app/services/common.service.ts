import { Inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( public snack: MatSnackBar, private _dialog: MatDialog,
     ) { }

  // mostrar error en consola y snackbar
  showError( err: any ) {

    const error = err.error;
    console.error( error.msg );

    this.snack.open( error.msg, 'Cerrar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['error-snackbar']
    });
  }

  returnError( err: any ) {
    const error = err.error;
    return error.msg;
  }

  // mostrar mensaje en snackbar
  showSnak( msg: string, type: 'success' | 'error' = 'success' ) {

    this.snack.open( msg, 'Cerrar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [ `${type}-snackbar` ]
    });
  }

  openModal( component, width: '400px', callback: ((result) => void) | null = null ): void {
    const dialogRef = this._dialog.open(component, {
      width: width, // Ancho del modal (personalizable)
      // Puedes agregar más opciones aquí según tus necesidades
    });

    // Puedes realizar acciones después de que se cierre el modal, si es necesario
    dialogRef.afterClosed().subscribe(result => {
      if( callback ){
        callback( result );
      }else{
        return
      }
    });
  }

}
