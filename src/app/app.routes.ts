import { Routes } from '@angular/router';
import { FormDeactivateGuard } from './guards/form-deactivate.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing/landing.component').then((c) => c.LandingComponent),
  },
];
