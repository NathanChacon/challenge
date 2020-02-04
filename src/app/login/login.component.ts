import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {Login} from '../login'
import {AuthenticationService} from '../services/authentication.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm:FormGroup
    loginData:Login
    loginError:String
    loginSucces:String
    email:string
    password:string
    constructor(private router:Router, private fb:FormBuilder, private authenticationService:AuthenticationService) {}

    ngOnInit() {
        this.loginForm = this.fb.group({
            email:['',[Validators.required,Validators.email]],
            password: ['',Validators.required]
        })
    }

    onLogin() {
      this.email = this.loginForm.get('email').value
      this.password = this.loginForm.get('password').value   
      this.loginData = {email:this.email,password:this.password}
      this.authenticationService.login(this.loginData)
      .subscribe(
          (data:any) => {
              localStorage.setItem("token",data.token)
              this.router.navigate(["dashboard"])
          },
          (e) => {
              this.loginError = e.error.error
          }
       )
    }
}
