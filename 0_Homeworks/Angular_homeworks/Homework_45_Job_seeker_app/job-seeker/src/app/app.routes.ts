import { Routes } from '@angular/router';
import { AvailableJobs } from './feature/jobs/components/available-jobs/available-jobs';
import { AppliedJobs } from './feature/jobs/components/applied-jobs/applied-jobs';

export const routes: Routes = [
  {
    path: '',
    component: AvailableJobs,
  },
  {
    path: 'applied-jobs',
    component: AppliedJobs,
  },
];
