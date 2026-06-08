import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  http = inject(HttpClient);

  getVideos() {
    return this.http.get<Video[]>('./data/videos.json');
  }
}
