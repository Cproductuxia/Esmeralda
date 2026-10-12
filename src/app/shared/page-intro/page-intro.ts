import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-intro',
  templateUrl: './page-intro.html',
  styleUrl: './page-intro.css',
})
export class PageIntro {
  titulo = input.required<string>();
  texto = input.required<string>();
}
