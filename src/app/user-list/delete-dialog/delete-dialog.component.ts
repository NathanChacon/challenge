import { Component, OnInit,Inject } from '@angular/core'
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import {UserService} from '../../services/user/user.service'
import { error } from 'protractor'

@Component({
  selector: 'app-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
