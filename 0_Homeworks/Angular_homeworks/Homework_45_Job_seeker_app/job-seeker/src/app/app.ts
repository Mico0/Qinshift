import { Component, inject, model, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobsService } from './core/services/jobs-service';
import { Header } from './core/components/header/header';
import { AvailableJobs } from './feature/jobs/components/available-jobs/available-jobs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  jobsService = inject(JobsService);

  ngOnInit() {
    this.jobsService.getJobs();
  }
}
