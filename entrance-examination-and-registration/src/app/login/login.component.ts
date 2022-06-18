import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../models/loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: LoginModel = {} as LoginModel;
  message: string = '';
  hasError: boolean = false;
  hasSuccess: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onLogin(): void {
    if (this.loginData.username === undefined || this.loginData.password === undefined) {
      this.message = "Please fill up login form!";
      this.hasError = true;
      this.hasSuccess = false;
      return;
    }

    if (this.loginData.username === 'johny' && this.loginData.password === 'johny') {
      this.message = 'Successfully Logged in!';
      this.hasError = false;
      this.hasSuccess = true;
    }
  }

}
