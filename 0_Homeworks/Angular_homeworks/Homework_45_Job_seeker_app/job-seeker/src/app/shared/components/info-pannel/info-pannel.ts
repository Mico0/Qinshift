import { Component, inject, signal } from '@angular/core';
import { Button } from '../button/button';
import { JobsService } from '../../../core/services/jobs-service';

@Component({
  selector: 'app-info-pannel',
  imports: [Button],
  templateUrl: './info-pannel.html',
  styleUrl: './info-pannel.scss',
})
export class InfoPannel {
  jobsService = inject(JobsService);
  numAvailaleJobs = this.jobsService.numberOfTotalJobs;
  numAppliedJobs = this.jobsService.numberOfAppliedJobs;

  sortValue = signal('');

  onClickSort(event: Event) {
    const target = event.target as HTMLHeadingElement;

    // console.log(target);

    if (target.className.includes('starting-salary')) {
      this.sortValue.set('starting-salary');
      console.log(this.sortValue());
      console.log('Starting salary');
    }

    if (target.className.includes('work-type')) {
      this.sortValue.set('work-type');
      console.log(this.sortValue());
      console.log('Work type');
    }
  }
}
