import { Routes } from '@angular/router';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { HomeComponent } from './components/home/home/home.component';

export const routes: Routes = [
    
    
    {path: '', component: LoginComponent},
    {path: "user-login", component:LoginComponent},
    {path: 'user-register', component:RegisterComponent},
    {path: 'home', component: HomeComponent},
    {path:"**", component:LoginComponent, pathMatch:"full"},
];
