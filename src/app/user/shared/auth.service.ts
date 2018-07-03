import { Injectable } from '@angular/core';
import { IUser } from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser:IUser;

  constructor() { } 

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id:1,
      userName: userName,
      firstName: 'Omar',
      lastName: 'Gaston'
    }    
  }

  isAuthenticated(){
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: String, lastName: String) {
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName
  }
}
