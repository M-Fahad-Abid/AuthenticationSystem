import { Routes } from '@angular/router';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { HomeComponent } from './components/home/home/home.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    
    
    {path: '', component: LoginComponent},
    {path: "user-login", component:LoginComponent},
    {path: 'user-register', component:RegisterComponent},
    {path: 'home', component: HomeComponent, canActivate:[authGuard]},
    {path:"**", component:LoginComponent, pathMatch:"full"},
];
