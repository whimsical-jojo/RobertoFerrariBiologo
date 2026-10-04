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
      const now = new Date();

      return events
        // Filter out past events
        .filter(event => new Date(event.startDate) >= now)
        // Sort chronologically by start date
        .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
        // Take the first two upcoming events
        .slice(0, 2);
    })
  );
}
}
