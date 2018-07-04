import { Component, OnInit, Input } from '@angular/core';
import { ISession } from '../../shared/event.model';

@Component({
  selector: 'ev-session-list',
  templateUrl: './session-list.component.html',
  styles: []
})
export class SessionListComponent implements OnInit {

  @Input() sessions: ISession[];

  constructor() {  }

  ngOnInit() {
  }

}
