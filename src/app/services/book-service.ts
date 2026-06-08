import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  http = inject(HttpClient);

  getBooks() {
    return this.http.get<Book[]>('./data/books.json');
  }
}
