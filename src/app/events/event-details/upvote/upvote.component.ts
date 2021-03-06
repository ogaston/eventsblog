import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upvote',
  template: `
    <div class="votingWidgetContainer pointable" (click)="isClicked()">
      <div class="well votingWidget">
        <div class="votingButton">
          <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
        </div>
        <div class="badge badge-inverse votingCount">
          <div>{{count}}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {

  @Input() count: number;
  @Input() set voted(val){
    this.iconColor = val ? 'red' : 'white'
  };
  @Output() vote = new EventEmitter();
  iconColor: string;

  constructor() { }

  isClicked(){
    this.vote.emit({})
  }

}
