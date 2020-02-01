import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../user'

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  constructor(private httpClient: HttpClient) { }

  createPost(user:User){
    console.log(user)
    return this.httpClient.post<User>('https://reqres.in/api/users)',user)
  }

}
