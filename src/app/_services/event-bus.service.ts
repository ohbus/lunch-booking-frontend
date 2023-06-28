import { Injectable } from '@angular/core';
import { filter, map, Subject, Subscription } from "rxjs";
import { EventDataModel } from "../_models/event-data-model";

@Injectable ({
  providedIn: 'root'
})
export class EventBusService {

  private subject$ = new Subject<EventDataModel> ();

  constructor () {
  }

  emit ( event: EventDataModel ) {
    this.subject$.next (event);
  }

  on ( eventName: string, action: any ): Subscription {
    return this.subject$.pipe (
      filter (( e: EventDataModel ) => e.name === eventName),
      map (( e: EventDataModel ) => e["value"])).subscribe (action);
  }
}
