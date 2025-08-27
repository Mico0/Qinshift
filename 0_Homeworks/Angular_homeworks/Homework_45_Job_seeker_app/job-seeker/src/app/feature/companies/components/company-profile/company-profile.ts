import { Component, inject, OnInit, signal } from '@angular/core';
import { JobsService } from '../../../../core/services/jobs-service';
import { Company } from '../../models/company.model';
import { ActivatedRoute } from '@angular/router';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-company-profile',
  imports: [SlicePipe],
  templateUrl: './company-profile.html',
  styleUrl: './company-profile.scss',
})
export class CompanyProfile implements OnInit {
  jobsService = inject(JobsService);

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const jobId = this.route.snapshot.params['id'];

    this.jobsService.getCompanyById(parseInt(jobId));
  }

  selectedCompany = this.jobsService.selectedCompany;
}
