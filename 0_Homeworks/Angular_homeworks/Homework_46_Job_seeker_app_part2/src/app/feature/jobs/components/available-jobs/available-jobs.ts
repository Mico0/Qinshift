import { Component, inject, OnInit, signal } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs-service';
import { JobCard } from '../job-card/job-card';
import { InfoPannel } from '../../../../shared/components/info-pannel/info-pannel';
import { SearchFilterPipe } from '../../../../core/pipes/search-filter-pipe';

@Component({
  selector: 'app-available-jobs',
  imports: [JobCard, InfoPannel, SearchFilterPipe],
  templateUrl: './available-jobs.html',
  styleUrl: './available-jobs.scss',
})
export class AvailableJobs implements OnInit {
  jobsService = inject(JobsService);

  jobs = this.jobsService.jobs;

  searchValue = signal<string>('');

  ngOnChange() {
    console.log(this.searchValue());
  }

  ngOnInit() {
    this.jobsService.getJobs();
  }

  onSearchChange(value: string) {
    this.searchValue.set(value);

    console.log(value);
  }
}
