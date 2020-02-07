import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {MatDialog} from '@angular/material'
import {MainDialogComponent} from '../main-dialog/main-dialog.component'
import {Login} from '../interfaces/login'
import {AuthenticationService} from '../services/authentication/authentication.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm:FormGroup
    loginData:Login
    description:string
    email:string
    password:string
    showSpinner:boolean

    constructor(private router:Router, private fb:FormBuilder, private authenticationService:AuthenticationService, public dialog: MatDialog) {}
    
    ngOnInit() {
        this.loginForm = this.fb.group({
            email:['',[Validators.required,Validators.email]],
            password: ['',Validators.required]
        })
    }

    onLogin() {
      this.showSpinner = true
      this.email = this.loginForm.get('email').value
      this.password = this.loginForm.get('password').value   
      this.loginData = {email:this.email,password:this.password}

      this.authenticationService.login(this.loginData)
      .subscribe(
          (data:any) => {
              this.hiddeSpinner()
              localStorage.setItem("token",data.token)
              this.router.navigate(["dashboard"])
          },
          (e) => {
              this.hiddeSpinner()
              this.description = e.error.error
              this.openDialog(this.description)
              e.error.error
          }
       )
}

    openDialog(description){
        const dialogRef = this.dialog.open(MainDialogComponent, {
        minWidth: '300px',
        data: {description: description}
        });
    }

    hiddeSpinner(){
        setTimeout(() => {
            this.showSpinner = false
        },500)
    }

}
