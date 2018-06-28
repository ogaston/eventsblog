import { Component } from '@angular/core';

@Component({
  selector: 'ev-event-list',
  templateUrl: './event-list.component.html',
  styles: []
})
export class EventListComponent {

  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DET',
      city: 'London',
      country: 'England'
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
