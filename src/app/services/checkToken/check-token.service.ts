import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class CheckTokenService {

  constructor() { }

  public isAuthenticated(): boolean {
    return localStorage.getItem("token") ? true : false;
  }
}
