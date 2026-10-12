import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Grano y Ritual — Café de especialidad',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'metodos',
    title: 'Métodos — Grano y Ritual',
    loadComponent: () => import('./pages/methods/methods').then((m) => m.Methods),
  },
  {
    path: 'contacto',
    title: 'Contacto — Grano y Ritual',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: '' },
];
