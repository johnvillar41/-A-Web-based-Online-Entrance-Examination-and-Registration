import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';
  isOn: boolean = false;
  isFormValid: boolean = false;
  isSuccess: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm): void {
    if (form.value.username.length == 0 || form.value.password.length == 0) {
      this.errorMessage = "Please fill up login form!";
      this.isOn = true;
      return;
    } else {
      this.errorMessage = "";
      this.isOn = false;
      this.isFormValid = true;
    }

    if (this.isFormValid) {
      //TODO : Login
      //FAKE LOGIN MODULE
      if (form.value.username == "johny" && form.value.password == "johny") {
       
      }
    }

  }

}
