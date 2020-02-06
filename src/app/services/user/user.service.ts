import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string = "https://reqres.in/api/users"

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

  updateUserById(id:Number ,job:string){
    return this.httpClient.put(this.url + `/${id}`,{job: job})
  }

  deleteUserById(id:Number){
    return this.httpClient.delete(this.url + `/${id}`)
  }

}
