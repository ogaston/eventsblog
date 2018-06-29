import { Component, OnInit} from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from "../../common/toastr.service";

@Component({
  templateUrl: './event-list.component.html',
  styles: []
})
export class EventListComponent implements OnInit {

  events: any[];
  constructor(private eventService: EventService, private toastr:ToastrService) {
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName)
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

}
