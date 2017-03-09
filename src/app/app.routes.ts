import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginViewComponent } from './login/login-view-component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginViewComponent },
    { path:'',redirectTo:'/login',pathMatch:'full'}
];  


export const routing = RouterModule.forRoot(routes);
