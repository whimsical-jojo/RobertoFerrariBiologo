import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ScheduledEvent } from '../entities';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  http = inject(HttpClient);
  
  getEvents(){
    return this.http.get<ScheduledEvent[]>('./data/events.json');
  }

  getFeatured(): Observable<ScheduledEvent[]> {
  return this.getEvents().pipe(
    map(events => {
      // Replace with whichever 2 specific event IDs are featured yes this is a terrible solution lol
      const featuredEventIds = [1, 52]; 
      return events.filter(e => featuredEventIds.includes(e.id));
    })
  );
}
}
