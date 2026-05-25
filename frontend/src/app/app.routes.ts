import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Sales } from './sales/sales';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  {path:'sales', component: Sales }

];
