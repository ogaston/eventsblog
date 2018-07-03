import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/shared/auth.service';

@Component({
  selector: 'ev-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar { font-size: 14px; } 
    #searchForm { margin-right: 100px; } 
    li > a.active { color: #F97924; } 
  `]
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  

}
