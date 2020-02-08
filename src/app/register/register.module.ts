import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {SpinnerModule} from '../spinner/spinner.module'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {MainDialogModule} from '../main-dialog/main-dialog.module'

import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule
} from '@angular/material';
@NgModule({
  declarations: [RegisterComponent],
  imports: [
    SpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MainDialogModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [RegisterComponent]
})
export class RegisterModule { }
