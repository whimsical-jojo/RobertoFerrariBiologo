import { Component, computed, inject, signal } from '@angular/core';
import { MediaService } from '../../services/media-service';
import { map } from 'rxjs/internal/operators/map';
import { toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaCard } from "../../components/media-card/media-card";

@Component({
  selector: 'app-media',
  imports: [MediaCard],
  templateUrl: './media.html',
  styleUrl: './media.css',
})
export class MediaPage {
  //Yes it's practically identical to the MKay one lol
  mediaService = inject(MediaService);

  //Filter for deciding which content to show
  activeFilter = signal<'all' | 'other' | 'reviews-and-interviews' | 'book-presentation'>('all');

  //For generating the buttons on top and not cluttering the html
  readonly filterOptions = [
    { value: 'all', label: 'Tutto' },
    { value: 'book-presentation', label: 'Presentazioni libri' },
    { value: 'reviews-and-interviews', label: 'Recensioni e interviste' },
    { value: 'other', label: 'Altro' }
  ] as const;

  //Base media signal with sanitized urls for embedded yt videos
  readonly allMedia = toSignal(this.mediaService.getMedia(), {initialValue : []});

  //The filtered and displayed media
  filteredMedia = computed(() => {
    const currentFilter = this.activeFilter();
    const list = this.allMedia();

    if (currentFilter === 'all') {
      return list;
    }
    return list.filter(media => media.category === currentFilter);
  });

  setFilter(filter: 'all' | 'other' | 'reviews-and-interviews' | 'book-presentation') {
    this.activeFilter.set(filter);
  }
}
