import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//routing
import { AppRoutingModule } from './app-routing.module';
//components
import { AppComponent } from './app/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RecipiesComponent } from './components/recipies/recipies.component';
import { CreatorRecipiesComponent } from './components/creator-recipies/creator-recipies.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
//services
import {AuthService } from "./services/auth/auth.service";
//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignUpComponent,
    SignInComponent,
    RecipiesComponent,
    CreatorRecipiesComponent,
    ForgotPasswordComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
