import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../../feature/jobs/models/jobs.model';

@Pipe({
  name: 'appliedFilter',
})
export class AppliedFilterPipe implements PipeTransform {
  transform(value: Job[], isApplied: boolean): Job[] {
    const filteredJobs = value.filter((job) => job.isApplied);
    return filteredJobs;
  }
}
