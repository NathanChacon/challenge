import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MainDialogComponent} from '../main-dialog/main-dialog.component'
import { FormBuilder } from '@angular/forms';
import {Register} from '../interfaces/register'
import {RegisterService} from '../services/register/register.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  description:string
  registerFields: Register
  showSpinner: Boolean = false

  constructor(private fb: FormBuilder, private registerService: RegisterService, public dialog: MatDialog) { 
  }

ngOnInit(){
    this.registerForm = this.fb.group({
      name: ['',[Validators.required,Validators.pattern(/^((?!\s{2,}).)*$/),Validators.pattern(/^[A-Za-z]+$/)]],
      job:['', [Validators.required,Validators.pattern(/^((?!\s{2,}).)*$/),Validators.pattern(/^[A-Za-z]+$/)]]
    })
}

onSubmit(){
    this.showSpinner = true
    this.registerFields = this.registerForm.value
    this.registerService.registerUser(this.registerFields)
    .subscribe(
        (data:any) => {
          console.log(data)
          this.hiddeSpiner()
          this.description = `Usuario: ${data.name} | Cargo: ${data.job} registrado`
          this.openDialog(this.description)
        },
        (error) =>  {
          console.log(error)
          this.hiddeSpiner()
          this.description = "Ocorreu algum erro durante o envio do formulário"
          this.openDialog(this.description)
        }
    )
}

openDialog(description){
  const dialogRef = this.dialog.open(MainDialogComponent, {
    data: {description: description}
  });
}


hiddeSpiner(){
  setTimeout(() => {
    this.showSpinner = false
  },500)
}


}
