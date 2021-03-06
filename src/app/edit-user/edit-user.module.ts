import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EditUserComponent } from './edit-user.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import {SpinnerModule} from '../spinner/spinner.module'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {MainDialogModule} from '../main-dialog/main-dialog.module'
import {RouterModule} from '@angular/router'
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  declarations: [EditUserComponent],
  imports: [
    CommonModule,
    RouterModule,
    MainDialogModule,
    FlexLayoutModule,
    SpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ],
  exports: [EditUserComponent]
})
export class EditUserModule { }
