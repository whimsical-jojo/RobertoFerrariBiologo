import { Component, input, signal } from '@angular/core';
import { Book } from '../../entities';


@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css',
})
export class BookCard {
  book = input.required<Book>();

  isOpen = signal<boolean>(false);

  toggleDescription() {
    this.isOpen.update(value => !value);
  }
}
