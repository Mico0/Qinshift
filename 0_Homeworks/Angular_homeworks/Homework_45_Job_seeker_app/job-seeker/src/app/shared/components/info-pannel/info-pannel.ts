import { Component, computed, inject, model, signal } from '@angular/core';
import { Button } from '../button/button';
import { JobsService } from '../../../core/services/jobs-service';
import { AppliedFilterPipe } from '../../../core/pipes/applied-filter-pipe';

@Component({
  selector: 'app-info-pannel',
  imports: [Button, AppliedFilterPipe],
  templateUrl: './info-pannel.html',
  styleUrl: './info-pannel.scss',
})
export class InfoPannel {
  jobsService = inject(JobsService);

  jobs = this.jobsService.jobs;

  numAppliedToJobs = this.jobsService.numberOfAppliedJobs;
  availableJobs = this.jobsService.numberOfTotalJobs;

  sortValue = signal('');

  sortBy = model('');

  onCancelApplication(jobId: number) {
    this.jobsService.cancelApply(jobId);
  }

  onSortClick() {
    this.jobsService.sortJobs('salary');
  }

  onFilterChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    console.log(target.value);
    this.jobsService.filterJobs(target.value);
  }
}
