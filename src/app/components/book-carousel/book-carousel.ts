import { Component, computed, input, signal, viewChildren } from '@angular/core';
import { BookCard } from "../book-card/book-card";

@Component({
  selector: 'app-book-carousel',
  imports: [BookCard],
  templateUrl: './book-carousel.html',
  styleUrl: './book-carousel.css',
})
export class BookCarousel {
  books = input.required<Book[]>();

  currentBook = computed(() => this.books()[this.currentIndex()]);

  currentIndex = signal<number>(0);

  transformOffset = computed(() => `translateX(-${this.currentIndex() * 100}%)`);

  bookCardComponents = viewChildren(BookCard);

  scrollBooks(direction: number) {
    const currentCard = this.bookCardComponents()[this.currentIndex()];
    currentCard.isOpen.set(false);

    const newIndex = this.currentIndex() + direction;
    if (newIndex < 0) {
      this.currentIndex.set(this.books().length - 1);
    } else if (newIndex >= this.books().length) {
      this.currentIndex.set(0);
    } else {
      this.currentIndex.set(newIndex);
    }
  }

}
