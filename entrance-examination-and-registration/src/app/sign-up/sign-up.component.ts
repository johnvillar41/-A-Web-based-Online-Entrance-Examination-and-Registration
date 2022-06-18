import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignUpModel } from '../models/signUpModel';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  errorMessage: string = '';
  isOn: boolean = false;
  signUpData: SignUpModel = {} as SignUpModel;
  constructor() { }

  ngOnInit(): void {
  }

  onRegister(): void {

    if (this.signUpData.firstName === undefined ||
      this.signUpData.lastName === undefined ||
      this.signUpData.phoneNumber === undefined ||
      this.signUpData.email === undefined ||
      this.signUpData.password === undefined ||
      this.signUpData.confirmPassword === undefined) {

      this.isOn = true;
      this.errorMessage = "You left some forms untouched!";
      return;
    }

    if (this.signUpData.password != this.signUpData.confirmPassword) {
      this.isOn = true;
      this.errorMessage = "Passwords do not match!";
      return;
    }

    this.isOn = false;
    this.errorMessage = '';

  }
}
