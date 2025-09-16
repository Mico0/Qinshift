import { Component, computed, inject, input } from '@angular/core';
import { Job } from '../../models/jobs.model';
import { Button } from '../../../../shared/components/button/button';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ToggleReadMore } from '../../../../core/directives/toggle-read-more';
import { JobsService } from '../../../../core/services/jobs-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-card',
  imports: [Button, CurrencyPipe, DatePipe, ToggleReadMore],
  templateUrl: './job-card.html',
  styleUrl: './job-card.scss',
})
export class JobCard {
  jobService = inject(JobsService);
  router = inject(Router);

  job = input.required<Job>();
  qualificationsArray: string[] = [];

  ngOnInit() {
    this.qualificationsArray = this.job().qualifications.split(',');
  }

  onCompanyClick() {
    this.jobService.selectCompany(this.job().id);

    this.router.navigate(['company', this.job().id]);
    console.log(this.jobService.selectCompany(this.job().id));
  }

  onApplyJob() {
    this.jobService.applyJob(this.job().id);

    console.log(this.job());
  }

  onCancelClick() {
    this.jobService.cancelApply(this.job().id);
  }
}
