import { Component, inject } from '@angular/core';
import { BibliographyService } from '../../services/bibliography-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookCard } from "../../components/book-card/book-card";

@Component({
  selector: 'app-publications',
  imports: [BookCard],
  templateUrl: './publications.html',
  styleUrl: './publications.css',
})
export class Publications {
  bibliographyService = inject(BibliographyService);
  
  books = toSignal(this.bibliographyService.getBooks());
  publications = toSignal(this.bibliographyService.getPublications());
}
