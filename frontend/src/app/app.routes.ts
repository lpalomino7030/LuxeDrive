import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Inicio } from './pages/landing/inicio/inicio';
import { Home } from './pages/landing/home/home';
import { Rent } from './pages/landing/rent/rent';
import { Sales } from './pages/landing/sales/sales';
import { Dashboard } from './pages/dashboard/dashboard';
import { Client } from './pages/client/client';
import { Nosotros } from './pages/landing/Nosotros/nosotros';
import { Contenido } from './pages/dashboard/contenido/contenido';
import { Panel } from './pages/client/panel/panel';


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
      { path: 'about', component: Nosotros },
    ],
  },

  { path: 'dashboard', component: Dashboard,
    children: [{ path: '', component: Contenido }] },

  { path: 'perfil', component: Client,
    children: [{ path: '', component: Panel }] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
