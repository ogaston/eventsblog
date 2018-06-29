import { Component, Input } from '@angular/core';
import { IEvent } from '../shared/event.model';

@Component({
  selector: 'ev-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
    .orange { color: #FFC107 !important; }
    .green { color: green !important; }
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class EventThumbnailComponent  {

  @Input() event:IEvent;
  
  constructor() { }

  getStartTimeClass(){
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    const isLateStart = this.event && this.event.time === '10:00 am'; 
    return { green: isEarlyStart, bold: isEarlyStart, orange: isLateStart}
  }

}
