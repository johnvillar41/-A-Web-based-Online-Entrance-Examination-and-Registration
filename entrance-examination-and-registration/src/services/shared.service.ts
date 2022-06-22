import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private loginStatus = new Subject<boolean>();
  loginStatusMessage$ = this.loginStatus.asObservable();
  constructor() { }

  updateLoginStatus(status: boolean): void {
    this.loginStatus.next(status);
  }

}
