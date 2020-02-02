import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms'
import {ActivatedRoute} from '@angular/router'
import {UserService} from '../services/user.service'
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  editUserForm : FormGroup
  userId : Number
  userJob : String
  showSpinner : boolean
  succes: boolean
  fail: boolean

  constructor(private fb: FormBuilder,private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.showSpinner = true
    
    this.editUserForm = this.fb.group({
      name: new FormControl({ value: '', disabled:true }),
      job:['', [Validators.required,Validators.pattern(/^((?!\s{2,}).)*$/)]]
   })

    this.route.params.subscribe(res =>  {
        this.userId = res.id
    });

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
      (data) => {
        this.hiddeSpinner()
        this.fail = false
        this.succes = true
        console.log(data)
      },
      (error) => {
        this.hiddeSpinner()
        this.succes = false
        this.fail = true
        console.log(error)
      }
    )
  }

  hiddeSpinner(){
    setTimeout(() => {
      this.showSpinner = false
    },500)
  }
}
