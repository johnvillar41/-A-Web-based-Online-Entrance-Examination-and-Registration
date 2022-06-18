import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  constructor(
    private router: Router
  ) { }

  login(username: string, password: string): void {
    //Fake login
    if (username == 'johny' && password == 'johny') {
      this.router.navigate(['/dashboard']);
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
}
