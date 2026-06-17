import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  http = inject(HttpClient);
  
  getEvents(){
    return this.http.get<Event[]>('./data/events.json');
  }
}
