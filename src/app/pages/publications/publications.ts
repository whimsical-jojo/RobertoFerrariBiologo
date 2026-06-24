import { Component, inject } from '@angular/core';
import { BibliographyService } from '../../services/bibliography-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookCard } from "../../components/book-card/book-card";
import { PublicationCard } from "../../components/publication-card/publication-card";

@Component({
  selector: 'app-publications',
  imports: [BookCard, PublicationCard],
  templateUrl: './publications.html',
  styleUrl: './publications.css',
})
export class Publications {
  bibliographyService = inject(BibliographyService);
  
  books = toSignal(this.bibliographyService.getBooks());
  publications = toSignal(this.bibliographyService.getPublications());
  otherWork = toSignal(this.bibliographyService.getOtherWork());
}
