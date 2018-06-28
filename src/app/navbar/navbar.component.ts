import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ev-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar { font-size: 14px; } 
    #searchForm { margin-right: 100px; } 
  `]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
