import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import {SpinnerModule} from '../spinner/spinner.module'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout';
import {RouterModule,Route} from '@angular/router'
import { DialogComponent } from './dialog/dialog.component';
import {
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatDialogModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  declarations: [UserListComponent, DialogComponent],
  imports: [
    FormsModule,
    RouterModule,
    SpinnerModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatListModule,
    ReactiveFormsModule,
    CommonModule
  ],
  entryComponents: [
    DialogComponent
  ],
  exports: [UserListComponent]
})
export class UserListModule { }
