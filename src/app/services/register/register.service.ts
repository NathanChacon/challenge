import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Register} from '../../interfaces/register'

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  url:string = 'https://reqres.in/api/users'
  constructor(private httpClient: HttpClient) { }

  registerUser(registerFields:Register){
    return this.httpClient.post<Register>(this.url,registerFields)
  }

}
