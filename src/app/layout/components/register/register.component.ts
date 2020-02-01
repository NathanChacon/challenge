import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {User} from '../../../user'
import {RegisterService} from '../../../services/register.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup
  user: User
  showSpinner: Boolean = false
  succes: Boolean = false
  fail: Boolean = false

  constructor(private fb: FormBuilder, private registerService: RegisterService) { 
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['',[Validators.required,Validators.pattern(/^((?!\s{2,}).)*$/)]],
      job:['', [Validators.required,Validators.pattern(/^((?!\s{2,}).)*$/)]]
    })
  }



  onSubmit() {
    this.showSpinner = true
    this.user = this.userForm.value
    this.registerService.createPost(this.user)
    .subscribe(
        (data) => {
          this.showSpinner = false
          this.fail = false
          this.succes = true
        },
        error =>  {
          this.showSpinner = false
          this.succes = false
          this.fail = true
        }
    )
  }
}
