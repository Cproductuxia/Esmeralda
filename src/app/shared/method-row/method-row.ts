import { Component, input } from '@angular/core';

@Component({
  selector: 'app-method-row',
  templateUrl: './method-row.html',
  styleUrl: './method-row.css',
})
export class MethodRow {
  nombre = input.required<string>();
  tiempo = input.required<string>();
  descripcion = input.required<string>();
}
