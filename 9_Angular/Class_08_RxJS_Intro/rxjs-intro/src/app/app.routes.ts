import { Routes } from '@angular/router';
import { Observables } from './components/observables/observables';
import { Subjects } from './components/subjects/subjects';
import { Operators } from './components/operators/operators';
import { Signals } from './components/signals/signals';

export const routes: Routes = [
  //   { path: '', redirectTo: 'observables', pathMatch: 'full' },
  { path: 'observables', component: Observables },
  { path: 'subjects', component: Subjects },
  { path: 'operators', component: Operators },
  { path: 'signals', component: Signals },
];
