import { Routes } from '@angular/router';

export const routes: Routes = [
  // ======================================================================================= public
  {
    path: '',
    loadComponent: () =>
      import('../core/layouts/layout-public/layout-public.component').then(m => m.LayoutPublicComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../core/pages/public/home-page/home-page.component').then(m => m.HomePageComponent)
      },
    ]
  },

  // ======================================================================================= private
  {
    path: 'dashboard',
    loadComponent: () =>
      import('../core/layouts/layout-private/layout-private.component').then(m => m.LayoutPrivateComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../core/pages/private/dashboard-page/dashboard-page.component').then(m => m.DashboardPageComponent)
      },
    ]
  },

  // ======================================================================================= error

  // error 500
  {
    path: '500',
    loadComponent: () =>
      import('../core/layouts/layout-error/layout-error.component').then(m => m.LayoutErrorComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../core/pages/internal-error-page/internal-error-page.component').then(m => m.InternalErrorPageComponent)
      },
    ]
  },

  // error 404
  {
    path: '**',
    loadComponent: () =>
      import('../core/layouts/layout-error/layout-error.component').then(m => m.LayoutErrorComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../core/pages/notfound-page/notfound-page.component').then(m => m.NotfoundPageComponent)
      },
    ]
  }
];
