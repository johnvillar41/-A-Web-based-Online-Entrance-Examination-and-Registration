import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuard } from 'src/auth.guard';
import { AuthService } from 'src/services/auth-service.service';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(
    private auth: AuthService,
    private sharedService: SharedService
    ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isAuthenticated();
    this.sharedService.loginStatusMessage$.subscribe(status => {
      if(status === true) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  onLogout(): void {
    this.auth.logout();
  }

}
