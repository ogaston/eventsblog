import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ev-create-event',
  templateUrl: './create-event.component.html',
  styles: []
})
export class CreateEventComponent implements OnInit {
  isDirty:boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel(){
    this.router.navigate(['/events']);
  }

}
