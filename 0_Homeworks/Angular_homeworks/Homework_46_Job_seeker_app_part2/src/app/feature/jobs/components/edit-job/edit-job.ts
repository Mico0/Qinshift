import { Component, inject } from '@angular/core';
import { JobForm } from '../job-form/job-form';
import { JobsService } from '../../../../core/services/jobs-service';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../models/jobs.model';

@Component({
  selector: 'app-edit-job',
  imports: [JobForm],
  templateUrl: './edit-job.html',
  styleUrl: './edit-job.scss',
})
export class EditJob {
  private jobsService = inject(JobsService);

  selectedJob = this.jobsService.selectedJob;

  onEditJob(value: Job, id: number) {
    console.log(value.id);
    const updatedJob: Job = {
      id,
      ...value,
    };

    this.jobsService.updateJob(updatedJob);
  }
}
