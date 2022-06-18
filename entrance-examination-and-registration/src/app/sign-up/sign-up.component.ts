import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  errorMessage: string = '';
  isOn: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onRegister(form: NgForm): void {
    console.log(form.value);
    console.log(form);
    if (
      form.value.firstName.length == 0 ||
      form.value.lastName.length == 0 ||
      form.value.phoneNumber.length == 0 ||
      form.value.email.length == 0 ||
      form.value.password.length == 0 ||
      form.value.confirmPassword.length == 0) {
      this.isOn = true;
      this.errorMessage = "You left some forms untouched!";
      return;
    } else {
      this.isOn = false;
      this.errorMessage = "";
    }

    if (form.value.password == form.value.confirmPassword) {
      this.isOn = false;
      this.errorMessage = "";
    } else {
      this.isOn = true;
      this.errorMessage = "Passwords do not match!";
    }

  }

}
