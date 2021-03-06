import { Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,FormGroupDirective,Validators} from '@angular/forms'
import {ActivatedRoute} from '@angular/router'
import {UserService} from '../services/user/user.service'
import {MatDialog} from '@angular/material/dialog';
import {MainDialogComponent} from '../main-dialog/main-dialog.component'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  
  editUserForm : FormGroup
  userId : Number
  userJob : string
  description: string
  showSpinner : boolean

  constructor(private fb: FormBuilder,private route: ActivatedRoute, private userService: UserService, public dialog: MatDialog) { }

  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;

ngOnInit() {
    this.showSpinner = true
    
    this.editUserForm = this.fb.group({
      name: new FormControl({ value: '', disabled:true }),
      job:['', [Validators.required,Validators.pattern(/^((?!\s{2,}).)*$/),Validators.pattern(/^[A-Za-z]+$/)]]
   })

    this.route.params.subscribe(res =>  {
        this.userId = res.id
        this.getUserById()
    });
    
  }

getUserById(){
  this.userService.getUserById(this.userId)
  .subscribe(
      (data: any) => {
        this.hiddeSpinner()
        this.editUserForm.setValue({name: data.data.first_name + " " + data.data.last_name , job:''})
      },
      (error) => {
        this.hiddeSpinner()
        console.log(error)
      }
  )
}

onSubmit(){
    this.showSpinner = true
    this.userJob = this.editUserForm.get('job').value
    this.userService.updateUserById(this.userId,this.userJob)
    .subscribe(
      (data:any) => {
        this.resetForm()
        this.hiddeSpinner()
        this.description = `Emprego atualizado para ${data.job} com sucesso`
        this.openDialog(this.description)
        console.log(data)
      },
      (error) => {
        this.resetForm()
        this.hiddeSpinner()
        this.description = "Ocorreu algum erro durante o envio do formulário"
        this.openDialog(this.description)
        console.log(error)
      }
    )
  }

openDialog(description){
    const dialogRef = this.dialog.open(MainDialogComponent, {
       data: {description: description}
    });
}

resetForm(){
  const name =  this.editUserForm.get('name').value
  this.formDirective.resetForm()
  this.editUserForm.setValue({name:name,job:''})
}


hiddeSpinner(){
    setTimeout(() => {
      this.showSpinner = false
    },500)
  }
}
