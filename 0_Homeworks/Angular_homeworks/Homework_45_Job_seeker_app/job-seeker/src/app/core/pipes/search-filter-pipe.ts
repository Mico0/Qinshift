import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../../feature/jobs/models/jobs.model';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: Job[], searchValue: string): Job[] {
    const filteredJobs = value.filter((job) =>
      job.companyName.toLowerCase().includes(searchValue.toLowerCase().trim())
    );

    return filteredJobs;
  }
}
