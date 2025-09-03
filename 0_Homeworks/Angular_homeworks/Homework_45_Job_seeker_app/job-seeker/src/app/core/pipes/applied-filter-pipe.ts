import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../../feature/jobs/models/jobs.model';

@Pipe({
  name: 'appliedFilter',
  pure: false,
})
export class AppliedFilterPipe implements PipeTransform {
  transform(value: Job[], isApplied: boolean): Job[] {
    const filteredJobs = value.filter((job) => job.isApplied === isApplied);
    return filteredJobs;
  }
}
