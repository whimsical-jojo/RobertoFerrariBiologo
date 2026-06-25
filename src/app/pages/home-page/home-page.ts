import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookCarousel } from "../../components/book-carousel/book-carousel";
import { RouterLink } from '@angular/router';
import { BibliographyService } from '../../services/bibliography-service';
import { MediaCard } from "../../components/media-card/media-card";
import { EventCard } from "../../components/event-card/event-card";
import { MediaService } from '../../services/media-service';
import { EventService } from '../../services/event-service';


@Component({
  selector: 'app-home-page',
  imports: [BookCarousel, RouterLink, MediaCard, EventCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  bookService = inject(BibliographyService);
  mediaService = inject(MediaService);
  eventService = inject(EventService);
  
  readonly books =  toSignal(this.bookService.getBooks());
  readonly featuredMedia = toSignal(this.mediaService.getFeatured());
  readonly featuredEvents = toSignal(this.eventService.getFeatured());
}
