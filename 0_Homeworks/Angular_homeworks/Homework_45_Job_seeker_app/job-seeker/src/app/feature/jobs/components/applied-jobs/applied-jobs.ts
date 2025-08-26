import { Component, inject, OnInit, signal } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs-service';
import { JobCard } from '../job-card/job-card';
import { Job } from '../../models/jobs.model';
import { Button } from '../../../../shared/components/button/button';
import { SortPipe } from '../../../../core/pipes/sort-pipe';
import { InfoPannel } from '../../../../shared/components/info-pannel/info-pannel';

@Component({
  selector: 'app-applied-jobs',
  imports: [JobCard, InfoPannel, SortPipe],
  templateUrl: './applied-jobs.html',
  styleUrl: './applied-jobs.scss',
})
export class AppliedJobs {
  jobsService = inject(JobsService);

  appliedJobs = this.jobsService.appliedToJobs;
}
