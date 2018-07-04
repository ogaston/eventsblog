import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';

@Component({
  selector: 'ev-event-details',
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding: auto 20px; }
    .event-image { height: 100px; }
    h3 { margin: 0px 0px 5px 0px }
    a { cursor: pointer; }
  `]
})
export class EventDetailsComponent implements OnInit {

  event: IEvent;
  addMode: boolean;

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }

  addSession(){
    this.addMode = true
  }

  saveNewSession(session: ISession){
    const nextId:number = Math.max.apply(null, this.event.sessions.map(session => session.id))
    session.id = nextId + 1;
    this.event.sessions.push(session)
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }
}
