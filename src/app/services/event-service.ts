import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ScheduledEvent } from '../entities';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  http = inject(HttpClient);
  
  getEvents(){
    return this.http.get<ScheduledEvent[]>('./data/events.json');
  }
}
