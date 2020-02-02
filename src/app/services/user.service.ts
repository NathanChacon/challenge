import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "https://reqres.in/api/users"

  constructor(private httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get(this.url)
  }

  getUsersByPage(page:Number){
    return this.httpClient.get(this.url + `?page=${page}`)
  }

  getUserById(id:Number){
    return this.httpClient.get(this.url + `/${id}`)
  }

}
