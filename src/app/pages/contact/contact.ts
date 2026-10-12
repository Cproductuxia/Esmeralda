import { Component } from '@angular/core';
import { PageIntro } from '../../shared/page-intro/page-intro';
import { ContactBlock, DatoContacto } from '../../shared/contact-block/contact-block';

@Component({
  selector: 'app-contact',
  imports: [PageIntro, ContactBlock],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  datos: DatoContacto[] = [
    { etiqueta: 'Correo', valor: 'hola@granoyritual.example' },
    { etiqueta: 'Instagram', valor: '@granoyritual' },
    { etiqueta: 'Horario', valor: 'Martes a domingo, 8:00–17:00' },
  ];
}
