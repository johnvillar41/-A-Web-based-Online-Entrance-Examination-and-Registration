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
    //Fake login
    if (username == 'johny' && password == 'johny') {
      this.router.navigate(['/dashboard/home']);
      localStorage.setItem('token', "HAHAHAHAHATDOG");
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token == null) {
      return false;
    }
    return true;
  }
}
