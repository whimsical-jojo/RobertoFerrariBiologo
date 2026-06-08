import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookCarousel } from "../../components/book-carousel/book-carousel";
import { Vita } from "../vita/vita";
import { RouterLink } from '@angular/router';
import { Videos } from "../videos/videos";


@Component({
  selector: 'app-home-page',
  imports: [BookCarousel, Vita, RouterLink, Videos],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  bookService = inject(BookService);
  
  books =  toSignal(this.bookService.getBooks());
}
