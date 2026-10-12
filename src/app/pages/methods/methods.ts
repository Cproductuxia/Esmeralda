import { Component } from '@angular/core';
import { PageIntro } from '../../shared/page-intro/page-intro';
import { MethodRow } from '../../shared/method-row/method-row';

@Component({
  selector: 'app-methods',
  imports: [PageIntro, MethodRow],
  templateUrl: './methods.html',
  styleUrl: './methods.css',
})
export class Methods {
  metodos = [
    {
      nombre: 'V60',
      tiempo: '3 min aprox.',
      descripcion:
        'Filtro de goteo manual. Resalta la acidez y las notas florales o frutales del grano. Requiere un vertido lento y constante.',
    },
    {
      nombre: 'Prensa francesa',
      tiempo: '4 min aprox.',
      descripcion:
        'Infusión por inmersión total. Produce una taza con más cuerpo y textura, ideal para granos con notas a chocolate o frutos secos.',
    },
    {
      nombre: 'Espresso',
      tiempo: '25–30 seg',
      descripcion:
        'Extracción a presión. Concentrado e intenso, es la base de bebidas como el capuchino o el flat white.',
    },
    {
      nombre: 'AeroPress',
      tiempo: '2 min aprox.',
      descripcion:
        'Combina inmersión y presión suave. Versátil y rápido, produce una taza limpia con poco sedimento.',
    },
  ];
}
