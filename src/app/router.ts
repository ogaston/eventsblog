import { EventListComponent } from "./events/event-list/event-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { Routes } from "@angular/router";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { ErrorComponent } from "./error/error.component";
import { EventRouteGuard } from "./events/event-details/event-route.guard";
import { EventListResolverService } from "./events/shared/event-list-resolver.service";
import { CreateSessionComponent } from "./events/create-session/create-session.component";

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventListComponent, resolve: {events:EventListResolverService} },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteGuard] },
    { path: 'events/session/new', component: CreateSessionComponent},
    { path: '404', component: ErrorComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
]