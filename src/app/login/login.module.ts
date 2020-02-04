import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule, MatInputModule,MatDialogModule} from '@angular/material';
import {MainDialogModule} from '../main-dialog/main-dialog.module'
import {SpinnerModule} from '../spinner/spinner.module'
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SpinnerModule,
        ReactiveFormsModule,
        MainDialogModule,
        LoginRoutingModule,
        MatInputModule,
        MatDialogModule,
        MatCheckboxModule,
        MatButtonModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}
