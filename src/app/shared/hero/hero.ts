import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  titulo = input.required<string>();
  texto = input.required<string>();
}
