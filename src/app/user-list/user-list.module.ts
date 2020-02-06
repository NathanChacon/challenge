import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import {SpinnerModule} from '../spinner/spinner.module'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout';
import {RouterModule,Route} from '@angular/router'
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import {MainDialogModule} from '../main-dialog/main-dialog.module'

import {
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatDialogModule,
  MatProgressSpinnerModule, MatTableModule, MatPaginatorModule, MatSortModule
} from '@angular/material';
import { DataTableComponent } from './data-table/data-table.component';


@NgModule({
  declarations: [UserListComponent, DeleteDialogComponent, DataTableComponent],
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
    MainDialogModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  entryComponents: [
    DeleteDialogComponent
  ],
  exports: [UserListComponent]
})
export class UserListModule { }
