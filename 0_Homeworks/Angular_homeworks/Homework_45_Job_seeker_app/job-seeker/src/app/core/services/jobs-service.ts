import { computed, Injectable, signal } from '@angular/core';
import { Job } from '../../feature/jobs/models/jobs.model';
import { mockJobs } from '../../feature/jobs/jobsMock';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobs = signal<Job[]>([]);

  sorted = false;

  getJobs(sortBy?: string, workType?: string) {
    let processedJobs: Job[] = [...this.jobs()];
    // console.log(this.sorted);
    if ((!workType && !sortBy) || workType === 'Select') {
      this.jobs.set(mockJobs);
      return;
    }

    if (sortBy && sortBy === 'salary' && !this.sorted) {
      // console.log('test');
      processedJobs.sort((a, b) => b.startingSalary - a.startingSalary);
      this.sorted = true;
    } else if (this.sorted) {
      processedJobs = processedJobs.sort(
        (a, b) => a.startingSalary - b.startingSalary
      );
      this.sorted = false;
    }

    if (workType) {
      processedJobs = processedJobs.filter((job) => job.workType === workType);
    }

    this.jobs.set(processedJobs);
    // console.log(this.jobs());
  }

  applyJob(jobId: number) {
    this.jobs.update((prevJobs) => {
      return prevJobs.map((job) => {
        if (job.id !== jobId) {
          return job;
        }
        return { ...job, isApplied: true };
      });
    });
  }

  cancelApply(jobId: number) {
    this.jobs.update((prevJobs) => {
      return prevJobs.map((job) => {
        if (job.id !== jobId) {
          return job;
        }
        return { ...job, isApplied: false };
      });
    });
  }
}
