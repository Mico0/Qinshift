import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobsService } from './core/services/jobs-service';
import { Header } from './core/components/header/header';
import { AvailableJobs } from './feature/jobs/components/available-jobs/available-jobs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, AvailableJobs],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  jobsService = inject(JobsService);

  ngOnInit() {
    this.jobsService.getJobs();
  }
}
