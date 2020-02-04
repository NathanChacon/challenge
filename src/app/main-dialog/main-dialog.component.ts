import { Component, OnInit, Inject } from '@angular/core'
import {MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-main-dialog',
  templateUrl: './main-dialog.component.html',
  styleUrls: ['./main-dialog.component.scss']
})
export class MainDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
