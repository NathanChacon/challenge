import { Component, OnInit } from '@angular/core'
import {UserService} from '../services/user.service'
import {Client} from '../client'
import {FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  clients : Client[]
  filteredClient:Client
  filteredClientError: Boolean = false
  totalPages: Number
  buttons : Number[] = []
  pageNumber:Number
  userId = new FormControl('',[Validators.required,Validators.min(0)])
  showSpinner: Boolean
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.showSpinner = true
    this.userService.getUsers().subscribe(
        (data: any) => {
          this.hideSpinner()
          this.clients = data.data
          this.totalPages = data.total_pages
          this.generateButton(this.totalPages)
       }
    )
}

generateButton(total:Number){
  for(let i = 1; i <= total; i++){
    this.buttons.push(i)
  }
}

filterByPage(event){
  if(event._elementRef.nativeElement.id === this.pageNumber){
    return
  }
  this.pageNumber = event._elementRef.nativeElement.id
  this.userService.getUsersByPage(this.pageNumber)
  .subscribe((data: any) => {
    this.clients = data.data
  })
}

filterUsersById(){
  this.userService.getUserById(this.userId.value).subscribe(
    (data:any) => {
      this.filteredClientError = false
      this.filteredClient = data.data
    },
    error => {
      this.filteredClientError = true
    }  
  )
}

hideSpinner(){
  setTimeout(() => {
    this.showSpinner = false
  },500)
}


}