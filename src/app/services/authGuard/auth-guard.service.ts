import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CheckTokenService } from '../checkToken/check-token.service';
import {MainDialogComponent} from '../../main-dialog/main-dialog.component'
import {MatDialog} from '@angular/material'


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public checkToken: CheckTokenService, public router: Router, private dialog: MatDialog) { }
  canActivate(): boolean {
    if (!this.checkToken.isAuthenticated()) {
      this.router.navigate(['login']);
      this.dialog.open(MainDialogComponent,{data:{description:'Você precisa entrar na sua conta para acessar este recurso'}})
      return false;
    }
    return true;
  }
}
