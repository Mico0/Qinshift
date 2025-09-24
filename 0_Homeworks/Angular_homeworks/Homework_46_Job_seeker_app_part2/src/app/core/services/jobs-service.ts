import { computed, inject, Injectable, signal } from '@angular/core';
import { Job } from '../../feature/jobs/models/jobs.model';
import { mockJobs } from '../../feature/jobs/jobsMock';
import { Company } from '../../feature/companies/models/company.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobs = signal<Job[]>([]);
  allJobs = signal<Job[]>([...mockJobs]);

  private router = inject(Router);

  numberOfTotalJobs = computed(
    () => this.allJobs().filter((job) => job.isApplied === false).length
  );

  numberOfAppliedJobs = computed(
    () => this.allJobs().filter((job) => job.isApplied === true).length
  );

  sorted = false;

  selectedCompany = signal<Company>(null);

  selectedJob = signal<Job>(null);

  getJobs() {
    this.jobs.set(this.allJobs());
    // console.log(this.jobs());
  }

  selectJob(id: number): Job {
    const job = this.jobs().find((job) => job.id === id);
    if (!job) return undefined;

    this.selectedJob.set(job);

    return job;
  }

  selectCompany(id: number): Company | undefined {
    const job = this.jobs().find((job) => job.id === id);
    if (!job) return undefined;

    const company = {
      companyId: job.id,
      companyName: job.companyName,
      companyLogo: job.companyLogo,
      companyAddress: job.companyAddress,
      companyIndustry: job.companyIndustry,
      companyWebsite: job.companyWebsite,
    };

    this.selectedCompany.set(company);

    return company;
  }

  getCompanyById(id: number) {
    if (this.selectedCompany()) return;

    this.selectCompany(id);
  }

  filterJobs(workType?: string) {
    if (!workType || workType === 'Select') {
      this.jobs.set(this.allJobs());
      return;
    }

    const processedJobs = this.allJobs().filter(
      (job) => job.workType === workType
    );

    this.jobs.set(processedJobs);
  }

  sortJobs(type: 'salary') {
    let processedJobs: Job[] = [...this.jobs()];
    if (type && !this.sorted) {
      console.log('test');
      processedJobs = processedJobs.sort(
        (a, b) => b.startingSalary - a.startingSalary
      );
      this.sorted = true;
    } else if (this.sorted) {
      processedJobs = processedJobs.sort(
        (a, b) => a.startingSalary - b.startingSalary
      );
      this.sorted = false;
    }
    this.jobs.set(processedJobs);
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

    this.allJobs.update((prevJobs) => {
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

    this.allJobs.update((prevJobs) => {
      return prevJobs.map((job) => {
        if (job.id !== jobId) {
          return job;
        }
        return { ...job, isApplied: false };
      });
    });
  }

  addJob(job: Job) {
    this.allJobs.update((prevJobs) => [...prevJobs, job]);
    this.jobs.update((prevJobs) => [...prevJobs, job]);
    mockJobs.push(job);
    this.router.navigate(['/jobs']);
  }

  updateJob(updatedJob: Job) {
    this.allJobs.update((prevJobs) =>
      prevJobs.map((prevJob) =>
        prevJob.id === updatedJob.id ? { ...prevJob, ...updatedJob } : prevJob
      )
    );

    this.jobs.update((prevJobs) =>
      prevJobs.map((prevJob) =>
        prevJob.id === updatedJob.id ? { ...prevJob, ...updatedJob } : prevJob
      )
    );

    // console.log(updatedJob.id);

    const index = mockJobs.findIndex((j) => j.id === Number(updatedJob.id));

    if (index !== -1) {
      mockJobs[index] = { ...mockJobs[index], ...updatedJob };
    } else {
      console.log('Job not found');
    }

    this.router.navigate(['/jobs']);
  }
}
