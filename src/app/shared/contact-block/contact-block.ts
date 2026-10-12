import { Component, input } from '@angular/core';

export interface DatoContacto {
  etiqueta: string;
  valor: string;
}

@Component({
  selector: 'app-contact-block',
  templateUrl: './contact-block.html',
  styleUrl: './contact-block.css',
})
export class ContactBlock {
  titulo = input.required<string>();
  texto = input.required<string>();
  datos = input.required<DatoContacto[]>();
}
