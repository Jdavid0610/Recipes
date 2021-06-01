import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RecipiesComponent } from "./components/recipies/recipies.component";
import { CreatorRecipiesComponent } from "./components/creator-recipies/creator-recipies.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { HomeComponent } from "./components/home/home.component"
//httpclient
import {HttpClientModule} from '@angular/common/http';
//guard
import { AuthGuard } from "./services/auth/auth.guard";
const routes: Routes = [
  { path:'', redirectTo: '/home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  { path:'dashboard', component: DashboardComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'recipies', component: RecipiesComponent },
  { path: 'recipiescreator', component: CreatorRecipiesComponent, canActivate: [AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
