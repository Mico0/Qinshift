import { Routes } from '@angular/router';
import { Home } from './feature/home/home';
import { Login } from './feature/auth/components/login/login';
import { Register } from './feature/auth/components/register/register';
import { ReviewList } from './feature/reviews/components/review-list/review-list';
import { AddReview } from './feature/reviews/components/add-review/add-review';
import { ReviewDetails } from './feature/reviews/components/review-details/review-details';
import { authGuard } from './core/guards';

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
  {
    path: 'reviews',
    component: ReviewList,
    canActivate: [authGuard],
  },
  {
    path: 'details/:id',
    component: ReviewDetails,
    canActivate: [authGuard],
  },
  {
    path: 'add-review',
    component: AddReview,
    canActivate: [authGuard],
  },
];
