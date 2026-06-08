import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookCard } from "../../components/book-card/book-card";


@Component({
  selector: 'app-home-page',
  imports: [BookCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  bookService = inject(BookService);
  books =  toSignal(this.bookService.getBooks());
}
