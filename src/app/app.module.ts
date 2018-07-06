import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventService } from './events/shared/event.service';
import { TOASTR_TOKEN, Toastr} from './common/toastr.service';
import { JQ_TOKEN } from './common/jquery.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './router';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorComponent } from './error/error.component';
import { EventRouteGuard } from './events/event-details/event-route.guard';
import { EventListResolverService } from './events/shared/event-list-resolver.service';
import { AuthService } from './user/shared/auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './common/simple-modal/modal-trigger.directive';
import { UpvoteComponent } from './events/event-details/upvote/upvote.component';
import { VoterService } from './events/event-details/upvote/voter.service';
import { ValidateLocation } from './events/shared/validate-location.directive';
import { HttpClientModule } from '@angular/common/http';


let toastr:Toastr = window['toastr'];
let jQuery:Object = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    ValidateLocation,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    EventService, 
    {
      provide:TOASTR_TOKEN,
      useValue:toastr
    },
    {
      provide:JQ_TOKEN,
      useValue:jQuery
    },
    EventRouteGuard,
    EventListResolverService,
    { 
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState 
    },
    AuthService,
    VoterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if (component.isDirty) 
    return window.confirm('You have not saved this event, do you really want to cancel?');
  return true;
}