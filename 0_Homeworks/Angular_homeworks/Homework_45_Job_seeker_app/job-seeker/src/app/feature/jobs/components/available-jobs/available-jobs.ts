import { Component, inject, OnInit } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs-service';
import { JobCard } from '../job-card/job-card';
import { InfoPannel } from '../../../../shared/components/info-pannel/info-pannel';

@Component({
  selector: 'app-available-jobs',
  imports: [JobCard, InfoPannel],
  templateUrl: './available-jobs.html',
  styleUrl: './available-jobs.scss',
})
export class AvailableJobs implements OnInit {
  jobsService = inject(JobsService);

  jobs = this.jobsService.jobs;

  ngOnInit() {
    this.jobsService.getJobs();
  }
}
