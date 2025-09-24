import { Component, inject } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs-service';
import { Job } from '../../models/jobs.model';
import { JobForm } from '../job-form/job-form';

@Component({
  selector: 'app-add-job',
  imports: [JobForm],
  templateUrl: './add-job.html',
  styleUrl: './add-job.scss',
})
export class AddJob {
  private jobsService = inject(JobsService);

  onAddJob(value: Job) {
    const newJob: Job = {
      id: Date.now(),
      ...value,
    };

    this.jobsService.addJob(newJob);
  }
}
