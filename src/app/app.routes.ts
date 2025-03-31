import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ':menu',
    loadComponent: () => import('./shared/pages/content/content.component'),
  },
  {
    path: ':menu/:subMenu',
    loadComponent: () => import('./shared/pages/content/content.component'),
  },
];
