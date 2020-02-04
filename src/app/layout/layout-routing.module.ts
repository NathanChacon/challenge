import { NgModule } from '@angular/core'
import { RouterModule, Routes, CanActivate } from '@angular/router'
import { LayoutComponent } from './layout.component'
import {UserListComponent} from '../user-list/user-list.component'
import {RegisterComponent} from '../register/register.component'
import {EditUserComponent} from '../edit-user/edit-user.component'

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
            },
            {
                path: 'userlist',
                component: UserListComponent,
            },
            {
                path: 'register',
                component: RegisterComponent,
            },
            {
                path: 'edituser/:id',
                component: EditUserComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
