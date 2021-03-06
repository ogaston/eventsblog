import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../../common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float:right; color: #E05c65; padding-left: 10px}
    .error input {background-color: #E3C3C5}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
  public profileForm:FormGroup;
  
  constructor(
    private authService:AuthService, 
    private router:Router,
    @Inject(TOASTR_TOKEN) private toaster: Toastr
  ) { }

  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    let lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required]);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  cancel(){
    this.router.navigate(['/events'])
  }

  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['/user/login'])
    })
  }
  
  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
        .subscribe(()=>{
          this.toaster.success('Profile Save')
        })
      //this.router.navigate(['/events'])
    }
  }

}
