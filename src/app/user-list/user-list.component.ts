import { Component, OnInit } from '@angular/core'
import {UserService} from '../services/user/user.service'
import {Client} from '../interfaces/client'
import {FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component'
import {MainDialogComponent} from '../main-dialog/main-dialog.component'
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {


  constructor() { }
  
  ngOnInit(){}

}