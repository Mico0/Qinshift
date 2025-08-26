import { Component, computed, inject, input } from '@angular/core';
import { Job } from '../../models/jobs.model';
import { Button } from '../../../../shared/components/button/button';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { computeMsgId } from '@angular/compiler';
import { ToggleReadMore } from '../../../../core/directives/toggle-read-more';
import { JobsService } from '../../../../core/services/jobs-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-card',
  imports: [Button, CurrencyPipe, DatePipe, ToggleReadMore],
  templateUrl: './job-card.html',
  styleUrl: './job-card.scss',
})
export class JobCard {
  jobService = inject(JobsService);
  job = input.required<Job>();
  qualificationsArray: string[] = [];

  ngOnInit() {
    // console.log(this.qualificationsArray);
    // console.log(this.route.snapshot.url);
    this.qualificationsArray = this.job().qualifications.split(',');
  }

  onApplyJob() {
    this.jobService.applyJob(this.job().id);
    console.log(this.job());
  }

  onCancelClick() {
    this.jobService.cancelApply(this.job().id);
  }
}
