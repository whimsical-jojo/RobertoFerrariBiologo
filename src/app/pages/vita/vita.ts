import { Component, input } from '@angular/core';

@Component({
  selector: 'app-vita',
  imports: [],
  templateUrl: './vita.html',
  styleUrl: './vita.css',
})
export class Vita {
  isPreview = input<boolean>(false);
}
