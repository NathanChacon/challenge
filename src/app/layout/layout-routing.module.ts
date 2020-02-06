import { NgModule } from '@angular/core'
import { RouterModule, Routes, CanActivate } from '@angular/router'
import { LayoutComponent } from './layout.component'
import {UserListComponent} from '../user-list/user-list.component'
import {RegisterComponent} from '../register/register.component'
import {EditUserComponent} from '../edit-user/edit-user.component'
import { AuthGuardService } from '../services/authGuard/auth-guard.service';
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
                canActivate: [AuthGuardService]
            },
            {
                path: 'register',
                component: RegisterComponent,
                canActivate: [AuthGuardService]
            },
            {
                path: 'edituser/:id',
                component: EditUserComponent,
                canActivate: [AuthGuardService]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers:[AuthGuardService]
})
export class LayoutRoutingModule {}
