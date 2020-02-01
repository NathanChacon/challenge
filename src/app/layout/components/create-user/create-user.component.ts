import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  
  userForm: FormGroup
  

  constructor(private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['',[Validators.required,Validators.pattern(/^((?!\s{2,}).)*$/)]],
      job:['', [Validators.required,Validators.pattern(/^((?!\s{2,}).)*$/)]]
    })
  }



  onSubmit() {
    console.log(this.userForm.value)
  }

}
