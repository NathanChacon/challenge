import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import {SpinnerModule} from '../spinner/spinner.module'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    FormsModule,
    SpinnerModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatListModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [UserListComponent]
})
export class UserListModule { }
