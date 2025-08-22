import { Component, input } from '@angular/core';
import { Job } from '../../models/jobs.model';

@Component({
  selector: 'app-job-card',
  imports: [],
  templateUrl: './job-card.html',
  styleUrl: './job-card.scss',
})
export class JobCard {
  job = input.required<Job>();
}
