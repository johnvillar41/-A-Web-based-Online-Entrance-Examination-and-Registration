import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth-service.service';
import { LoginModel } from '../../models/loginModel';

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

  constructor(
    private loginService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    if (this.loginData.username === undefined || this.loginData.password === undefined) {
      this.message = "Please fill up login form!";
      this.hasError = true;
      this.hasSuccess = false;
      return;
    }
    let loginResult = this.loginService.login(this.loginData.username, this.loginData.password);
    if(!loginResult) {
      this.message = "Login Credentials not found!";
      this.hasError = true;
      this.hasSuccess = false;
      return;
    }
  }

}
