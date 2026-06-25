import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookCarousel } from "../../components/book-carousel/book-carousel";
import { Vita } from "../vita/vita";
import { RouterLink } from '@angular/router';
import { MediaPage } from "../media/media";
import { BibliographyService } from '../../services/bibliography-service';


@Component({
  selector: 'app-home-page',
  imports: [BookCarousel, RouterLink, MediaPage],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  bookService = inject(BibliographyService);
  
  books =  toSignal(this.bookService.getBooks());
}
