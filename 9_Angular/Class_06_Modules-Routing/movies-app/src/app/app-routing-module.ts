import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './feature/home/home';
import { About } from './feature/about/about';
import { NotFound } from './core/components/not-found/not-found';

const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./feature/movies/movies-module').then((m) => m.MoviesModule),
  },
  {
    path: 'not-found',
    component: NotFound,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
