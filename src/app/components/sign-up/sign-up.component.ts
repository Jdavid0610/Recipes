import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../../services/auth/auth.service"
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  validate(email:string,password:string,repassword:string){
    if(password!==repassword){

    }else{
      this.authService.SignIn(email, password);
    }
  }
}
