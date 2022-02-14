import { DialogExampleComponent } from './../dialog-example/dialog-example.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }

  openConfirmDialog(){
    this.dialog.open(DialogExampleComponent,{
      width:'390px',

      disableClose:true
    })
  }
}
