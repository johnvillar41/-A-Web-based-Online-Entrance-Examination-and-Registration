import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  login(username: string, password: string): boolean {
    if (username == 'johny' && password == 'johny') {
      this.router.navigate(['/dashboard']);
      return true;
    } else {
      return false;
    }
  }
}
