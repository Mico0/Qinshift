import { Component, computed, input } from '@angular/core';
import { Job } from '../../models/jobs.model';
import { Button } from '../../../../shared/components/button/button';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { computeMsgId } from '@angular/compiler';
import { ToggleReadMore } from '../../../../core/directives/toggle-read-more';

@Component({
  selector: 'app-job-card',
  imports: [Button, CurrencyPipe, DatePipe, ToggleReadMore],
  templateUrl: './job-card.html',
  styleUrl: './job-card.scss',
})
export class JobCard {
  job = input.required<Job>();
  qualificationsArray: string[] = [];

  ngOnInit() {
    // console.log(this.qualificationsArray);
    this.qualificationsArray = this.job().qualifications.split(',');
  }
}
