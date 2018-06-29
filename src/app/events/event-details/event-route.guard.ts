import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from '../shared/event.service';


@Injectable({
  providedIn: 'root'
})
export class EventRouteGuard implements CanActivate {

  constructor(private eventService: EventService, private router:Router){  }

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean> | boolean {
    const itExist = !!this.eventService.getEvent(+route.params['id']);

    if(!itExist) this.router.navigate(['/404'])

    return itExist;
  }
}
