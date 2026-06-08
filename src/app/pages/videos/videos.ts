import { Component, inject } from '@angular/core';
import { VideoService } from '../../services/video-service';
import { map } from 'rxjs/internal/operators/map';
import { toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  imports: [],
  templateUrl: './videos.html',
  styleUrl: './videos.css',
})
export class Videos {
  //Yes it's practically identical to the MKay one lol
  videoService = inject(VideoService);
  sanitizer = inject(DomSanitizer);

  videos = toSignal(this.videoService.getVideos().pipe(
    map(videos => videos.map(video => ({
      ...video,
      url: this.sanitizeUrl(video.url)
    })))
  ), { initialValue: [] });

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
