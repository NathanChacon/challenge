import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {RegisterModule} from '../register/register.module'
import {UserListModule} from '../user-list/user-list.module'
import {EditUserModule} from '../edit-user/edit-user.module'
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { Screen2Component } from './screen2/screen2.component';



@NgModule({
    imports: [
        CommonModule,
        RegisterModule,
        EditUserModule,
        UserListModule,
        LayoutRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        MatProgressSpinnerModule,
        TranslateModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [Screen2Component, LayoutComponent, NavComponent, TopnavComponent, SidebarComponent]

})
export class LayoutModule { }
