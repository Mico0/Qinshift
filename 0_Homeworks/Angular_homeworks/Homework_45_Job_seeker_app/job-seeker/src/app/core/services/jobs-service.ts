import { Injectable, signal } from '@angular/core';
import { Job } from '../../feature/jobs/models/jobs.model';
import { mockJobs } from '../../feature/jobs/jobsMock';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobs = signal<Job[]>([]);

  getJobs() {
    this.jobs.set(mockJobs);
    console.log(this.jobs());
  }
}
