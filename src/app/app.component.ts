import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/shared/auth.service';

@Component({
  selector: 'ev-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit{
  constructor(private auth:AuthService){}

  ngOnInit(){
    this.auth.checkAutheticationStatus()
  }
}
