import { Component, input } from '@angular/core';
import { Media } from '../../entities';

@Component({
  selector: 'app-media-card',
  imports: [],
  templateUrl: './media-card.html',
  styleUrl: './media-card.css',
})
export class MediaCard {
  media = input.required<Media>()
}
