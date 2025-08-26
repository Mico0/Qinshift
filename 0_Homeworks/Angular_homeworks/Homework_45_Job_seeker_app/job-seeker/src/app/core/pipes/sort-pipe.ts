import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../../feature/jobs/models/jobs.model';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: Job[], sortBy: string | null): Job[] {
    let sortedJobs: Job[] = [...value];

    if (sortBy === 'starting-salary') {
      sortedJobs.sort((a, b) => a.startingSalary - b.startingSalary);
    }

    console.log(sortBy);
    console.log(sortedJobs);

    return sortedJobs;
  }
}
