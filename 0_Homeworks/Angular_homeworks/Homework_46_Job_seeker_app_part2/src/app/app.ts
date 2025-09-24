import { Component, inject, model, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobsService } from './core/services/jobs-service';
import { Header } from './core/components/header/header';
import { FormsModule } from '@angular/forms';
import { ScrollToTop } from './shared/components/scroll-to-top/scroll-to-top';
import { Footer } from './core/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule, ScrollToTop, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  jobsService = inject(JobsService);

  ngOnInit() {
    this.jobsService.getJobs();
  }
}
