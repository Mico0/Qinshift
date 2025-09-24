import { Routes } from '@angular/router';
import { AvailableJobs } from './feature/jobs/components/available-jobs/available-jobs';
import { CompanyProfile } from './feature/companies/components/company-profile/company-profile';
import { Profile } from './feature/profile/components/profile/profile';
import { NotFound } from './core/components/not-found/not-found';
import { Home } from './core/components/home/home';
import { AddJob } from './feature/jobs/components/add-job/add-job';
import { EditJob } from './feature/jobs/components/edit-job/edit-job';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'jobs',
    component: AvailableJobs,
  },
  {
    path: 'company/:id',
    component: CompanyProfile,
  },
  {
    path: 'profile',
    component: Profile,
  },
  {
    path: 'add-job',
    component: AddJob,
  },
  {
    path: 'edit-job',
    component: EditJob,
  },
  {
    path: '**',
    component: NotFound,
  },
];
