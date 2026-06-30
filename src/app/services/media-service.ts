import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Media } from '../entities';
import { map, Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  http = inject(HttpClient);
  sanitizer = inject(DomSanitizer);

  getMedia() {
    return this.http.get<Media[]>('./data/media.json').pipe(
      map(medias =>
        medias.map(media => ({
          ...media,
          // Only sanitize iframe URLs for videos; keep standard strings for downloadable elements/links
          url: media.format === 'video' ? this.sanitizeUrl(media.url as string) : media.url
        }))
      )
    );
  }

  getFeatured(): Observable<Media[]> {
  return this.getMedia().pipe(
    map(medias => {
      // Replace with whichever 2 specific media IDs are featured
      const featuredMediaIds = [1, 13]; 
      return medias.filter(m => featuredMediaIds.includes(m.id));
    })
  );
}

sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
