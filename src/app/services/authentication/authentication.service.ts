import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Login} from '../../login'

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  url = "https://reqres.in/api/login"

  constructor(private httpClient : HttpClient) { }

  login(loginData:Login){
      return this.httpClient.post(this.url,loginData)
  }
}
