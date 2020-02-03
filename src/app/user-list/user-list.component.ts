import { Component, OnInit } from '@angular/core'
import {UserService} from '../services/user.service'
import {Client} from '../client'
import {FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {DialogComponent} from './dialog/dialog.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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

  constructor(private userService:UserService,private router: Router,private dialog: MatDialog) { }

  ngOnInit() {
    this.showSpinner = true
    this.getUsers()
}

getUsers(){
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

editUser(id: Number){
    this.router.navigate([`edituser/${id}`])
}

openDialog(id : Number){
    const dialogRef = this.dialog.open(DialogComponent, {
       width: '350px',
       height:'200px'
    });

   dialogRef.afterClosed().subscribe(result => {
       if(!result){
           return
      }     
       this.deleteUser(id)
  });
}

deleteUser(id : Number){
    this.showSpinner = true
    this.userService.deleteUserById(id)
    .subscribe(
      (data) => {
        this.clients = this.clients.filter((client) => {
          return client.id !== id
        })
        this.hideSpinner()
      },
      (error) => {
        this.hideSpinner()
        console.log('error')
      }
    )
}

hideSpinner(){
    setTimeout(() => {
       this.showSpinner = false
    },500)
}

}