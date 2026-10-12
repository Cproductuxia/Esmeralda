import { Component, input } from '@angular/core';

@Component({
  selector: 'app-quote-block',
  templateUrl: './quote-block.html',
  styleUrl: './quote-block.css',
})
export class QuoteBlock {
  cita = input.required<string>();
  autor = input.required<string>();
}
