import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path:'signup', component: SignupComponent},
  { path: 'customer-update', component: CustomerUpdateComponent },  
  { path: '', redirectTo: '/home', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }