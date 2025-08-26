import { computed, Injectable, signal } from '@angular/core';
import { Job } from '../../feature/jobs/models/jobs.model';
import { mockJobs } from '../../feature/jobs/jobsMock';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobs = signal<Job[]>([]);

  appliedToJobs = computed(() =>
    this.jobs().filter((job) => job.isApplied === true)
  );

  numberOfTotalJobs = computed(
    () => this.jobs().filter((job) => job.isApplied === false).length
  );
  numberOfAppliedJobs = computed(() => this.appliedToJobs().length);

  getJobs() {
    this.jobs.set(mockJobs);
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
