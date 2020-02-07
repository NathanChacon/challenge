import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../../interfaces/user'

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  url:string = 'https://reqres.in/api/users'
  constructor(private httpClient: HttpClient) { }

  createPost(user:User){
    return this.httpClient.post<User>(this.url,user)
  }

}
