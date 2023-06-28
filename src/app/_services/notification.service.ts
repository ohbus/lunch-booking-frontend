import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

@Injectable ({
  providedIn: 'root'
})
export class NotificationService {

  config: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }

  constructor ( public snackBar: MatSnackBar ) {
  }

  success ( msg: string ) {
    this.config['panelClass'] = [ 'success', 'notification' ]
    this.snackBar.open (msg, 'X', this.config)
  }

  error ( msg: string ) {
    this.config['panelClass'] = [ 'error', 'notification' ]
    this.snackBar.open (msg, 'X', this.config)
  }
}
