import { Routes } from '@angular/router';

import { Home } from './pages/public/home/home';
import { Sales } from './pages/public/sales/sales';
import { Login } from './login/login';
import { Register } from './register/register';
import {Rent} from './pages/public/rent/rent';
import {Dashboard} from './pages/dashboard/dashboard';
import {Client} from './pages/client/client';
import { Inicio } from './pages/public/inicio/inicio';


export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  {
    path: 'home',
    component: Inicio,
    children: [
      { path: '', component: Home },
      { path: 'rent', component: Rent },
      { path: 'sales', component: Sales },
    ],
  },

  { path: 'dashboard', component: Dashboard, children: [{ path: '', component: Dashboard }] },

  { path: 'perfil', component: Client, children: [{ path: '', component: Client }] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
