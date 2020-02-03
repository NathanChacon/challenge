import { Component, OnInit,Inject } from '@angular/core'
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import {UserService} from '../../services/user.service'
import { error } from 'protractor'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
