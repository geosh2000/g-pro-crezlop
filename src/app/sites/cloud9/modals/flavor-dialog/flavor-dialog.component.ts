import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-flavor-dialog',
  templateUrl: './flavor-dialog.component.html',
  styleUrls: ['./flavor-dialog.component.css']
})
export class FlavorDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

    console.log( data )
  }

}
