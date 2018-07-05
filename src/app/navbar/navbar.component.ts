import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/shared/auth.service';
import { ISession } from '../events/shared/event.model';
import { EventService } from '../events/shared/event.service';

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

  searchTerm:string = "";
  foundSessions: ISession[]

  constructor(public auth:AuthService, private eventService: EventService) { }

  ngOnInit() {
  }

  searchSessions(searchTerm){
    this.eventService.searchSessions(searchTerm).subscribe(session =>{
      this.foundSessions = session;
    })
  }
 

}
