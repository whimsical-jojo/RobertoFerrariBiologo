import { Component, input } from '@angular/core';

@Component({
  selector: 'app-publication-card',
  imports: [],
  templateUrl: './publication-card.html',
  styleUrl: './publication-card.css',
})
export class PublicationCard {
  publication = input.required<Publication>()
}
