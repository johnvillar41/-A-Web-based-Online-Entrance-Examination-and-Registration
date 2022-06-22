import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private router: Router,
    private sharedService: SharedService
  ) { }

  login(username: string, password: string): boolean {
    if (username == 'johny' && password == 'johny') {
      this.router.navigate(['/dashboard/home']);
      localStorage.setItem('token', "HAHAHAHAHATDOG");
      this.sharedService.updateLoginStatus(true);
      return true;
    } else {
      this.sharedService.updateLoginStatus(false);
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.sharedService.updateLoginStatus(false);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token == null) {
      this.sharedService.updateLoginStatus(false);
      return false;
    }
    this.sharedService.updateLoginStatus(true);
    return true;
  }
}
