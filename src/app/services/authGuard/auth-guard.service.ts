import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CheckTokenService } from '../checkToken/check-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public checkToken: CheckTokenService, public router: Router) { }
  canActivate(): boolean {
    if (!this.checkToken.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
