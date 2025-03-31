import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '404',
    title: 'Página não encontrada',
    loadComponent: () => import('./shared/pages/not-found/not-found.component'),
  },
  {
    path: ':menu',
    loadComponent: () => import('./shared/pages/content/content.component'),
  },
  {
    path: ':menu/:subMenu',
    loadComponent: () => import('./shared/pages/content/content.component'),
  },
  { path: '**', redirectTo: '' },
];
