import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

import { Pages } from './page.component'
export const routes: Routes = [
  {
    path: 'login',    
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }    
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
