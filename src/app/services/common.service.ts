import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( public snack: MatSnackBar ) { }

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
    return error.msg.toString();
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

}
