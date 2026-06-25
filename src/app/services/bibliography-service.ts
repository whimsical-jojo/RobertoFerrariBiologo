import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Book, Publication } from '../entities';

@Injectable({
  providedIn: 'root',
})
export class BibliographyService {
  http = inject(HttpClient);

  getBooks() {
    return this.http.get<Book[]>('./data/books.json');
  }

  getPublications() {
    return this.http.get<Publication[]>('./data/publications.json');
  }

  getOtherWork() {
    return this.http.get<Publication[]>('./data/other-work.json')
  }
}
