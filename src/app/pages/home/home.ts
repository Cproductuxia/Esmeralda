import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { QuoteBlock } from '../../shared/quote-block/quote-block';

@Component({
  selector: 'app-home',
  imports: [Hero, QuoteBlock],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
