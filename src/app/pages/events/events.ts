import { Component, computed, inject } from '@angular/core';
import { EventService } from '../../services/event-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { EventCard } from "../../components/event-card/event-card";

@Component({
  selector: 'app-events',
  imports: [EventCard],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  eventService = inject(EventService);
  
  _events = toSignal(this.eventService.getEvents(), {initialValue : []});

  futureEvents = computed(() => {
    const now = new Date();
    return this._events().filter(event => new Date(event.startDate) >= now)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  });
  
  pastEvents = computed(() => {
    const now = new Date();
    return this._events().filter(event => new Date(event.startDate) < now)
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
  });
}
