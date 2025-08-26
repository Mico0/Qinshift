import { Component, computed, inject, model, signal } from '@angular/core';
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

  jobs = this.jobsService.jobs;

  appliedToJobs = computed(() =>
    this.jobs().filter((job) => job.isApplied === true)
  );

  numberOfTotalJobs = computed(
    () => this.jobs().filter((job) => job.isApplied === false).length
  );
  numberOfAppliedJobs = computed(() => this.appliedToJobs().length);

  sortValue = signal('');

  sortBy = model('');

  onCancelApplication(jobId: number) {
    this.jobsService.cancelApply(jobId);
  }

  onSortClick() {
    this.jobsService.getJobs('salary');
  }

  onFilterChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    console.log(target.value);
    this.jobsService.getJobs(null, target.value);
  }
}
