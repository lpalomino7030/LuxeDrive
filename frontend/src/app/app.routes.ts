import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Sales } from './sales/sales';
import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'sales', component: Sales },
  { path: 'login', component: Login },
  { path: 'register', component: Register }
];
