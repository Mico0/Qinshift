import { Component, effect, input, output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Job, WorkType } from '../../models/jobs.model';

@Component({
  selector: 'app-job-form',
  imports: [ReactiveFormsModule],
  templateUrl: './job-form.html',
  styleUrl: './job-form.scss',
})
export class JobForm {
  editJobDatta = input<Job>();
  submitOutput = output<Job>();

  workType = Object.values(WorkType);
  jobForm = this.generateForm();

  constructor() {
    effect(() => {
      if (this.editJobDatta()) this.populateForm(this.editJobDatta());
    });
  }

  generateForm() {
    return new FormGroup({
      companyName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      companyLogo: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      expires: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      position: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      startingSalary: new FormControl(0, {
        nonNullable: true,
        validators: [Validators.required, Validators.min(0)],
      }),
      workType: new FormControl(WorkType.REMOTE, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      location: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      country: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      qualifications: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      description: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      isApplied: new FormControl(false, { nonNullable: true }),
      companyAddress: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      companyIndustry: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      companyWebsite: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/^https?:\/\//)],
      }),
    });
  }

  populateForm(job: Job) {
    this.jobForm.setValue({
      // Mandatory to be shown in the posting
      companyName: job.companyName,
      companyLogo: job.companyLogo,
      expires: job.expires,
      position: job.position,
      startingSalary: job.startingSalary,
      workType: job.workType,
      // Show the below in the details expanding element
      location: job.location,
      country: job.country,
      qualifications: job.qualifications,
      description: job.description,
      isApplied: job.isApplied,
      //Shown in the company details page + companyName and companyLogo
      companyAddress: job.companyAddress,
      companyIndustry: job.companyIndustry,
      companyWebsite: job.companyWebsite,
    });
  }

  onSubmit() {
    if (this.jobForm.invalid) return;

    this.submitOutput.emit(this.jobForm.value as Job);
  }
}
