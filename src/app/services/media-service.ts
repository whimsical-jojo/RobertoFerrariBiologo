import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Media } from '../entities';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  http = inject(HttpClient);

  getMedia() {
    return this.http.get<Media[]>('./data/media.json');
  }
}
