import { Component, inject } from '@angular/core';
import { VideoService } from '../../services/media-service';
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
  mediaService = inject(VideoService);
  sanitizer = inject(DomSanitizer);

  medias = toSignal(this.mediaService.getMedia().pipe(
    map(medias => medias.map(media => ({
      ...media,
      url: this.sanitizeUrl(media.url as string)
    })))
  ), { initialValue: [] });

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
