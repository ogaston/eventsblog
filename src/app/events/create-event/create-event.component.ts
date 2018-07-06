import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'ev-create-event',
  templateUrl: './create-event.component.html',
  styles: [`
    em {float:right; color: #E05c65; padding-left: 10px}
    .error input {background-color: #E3C3C5}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateEventComponent implements OnInit {
  public isDirty:boolean = false;
  public newEvent:any = {}

  constructor(private router: Router, private eventService:EventService) { }

  ngOnInit() {
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues)
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel(){
    this.router.navigate(['/events']);
  }

  check(obj){
    console.log(obj)
  }

}
