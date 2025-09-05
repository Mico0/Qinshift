import { Routes } from '@angular/router';
import { Home } from './feature/home/home';
import { Login } from './feature/auth/components/login/login';
import { Register } from './feature/auth/components/register/register';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
];
