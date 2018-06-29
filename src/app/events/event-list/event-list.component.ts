import { Component, OnInit} from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from "../../common/toastr.service";
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';

@Component({
  templateUrl: './event-list.component.html',
  styles: []
})
export class EventListComponent implements OnInit {

  events: IEvent[];
  constructor(private eventService: EventService, private toastr:ToastrService, private route:ActivatedRoute) {
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName)
  }

  ngOnInit() {
    //this.eventService.getEvents().subscribe(events => { this.events = events })
    this.events = this.route.snapshot.data['events'];
  }

}
