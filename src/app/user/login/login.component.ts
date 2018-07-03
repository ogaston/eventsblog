import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ev-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }

  public userName
  public password 
  public mouseOverLogin

  login(formProp) {
    this.authService.loginUser(formProp.userName, formProp.password);
    this.router.navigate(['events'])
  }

  cancel() {
    this.router.navigate(['events'])
  }

}
