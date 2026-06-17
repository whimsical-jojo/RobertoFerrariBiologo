import { DatePipe, registerLocaleData } from '@angular/common';
import { Component, input } from '@angular/core';
import localeIt from '@angular/common/locales/it';

registerLocaleData(localeIt, 'it');

@Component({
  selector: 'app-event-card',
  imports: [DatePipe],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css',
})
export class EventCard {
  event = input.required<Event>();
}
