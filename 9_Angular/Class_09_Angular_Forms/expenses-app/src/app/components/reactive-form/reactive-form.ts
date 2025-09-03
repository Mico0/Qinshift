import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

const blockedWords: string[] = ['money', 'casino', 'betting', 'drugs', 'guns'];

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, TitleCasePipe],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss',
})
export class ReactiveForm implements OnInit {
  expenseForm = this.generateExpenseForm();

  paymentTypes: string[] = ['cash', 'credit'];

  maxCommentLength = 90;

  ngOnInit(): void {
    this.expenseForm.controls.comment.valueChanges.subscribe((value) => {
      console.log('this is the current value of the comment input ', value);
    });
  }

  generateExpenseForm() {
    return new FormGroup({
      basicData: new FormGroup({
        title: new FormControl('', [
          Validators.required,
          this.blockedWorsValidator,
        ]),
        amount: new FormControl<number>(0, [
          Validators.required,
          Validators.min(1),
          Validators.max(500),
        ]),
        date: new FormControl('2025-09-01'),
      }),
      priority: new FormControl('medium'),
      comment: new FormControl('', Validators.maxLength(this.maxCommentLength)),
      type: new FormControl('cash'),
    });

    //* Linear form without grouping
    // return new FormGroup({
    //   title: new FormControl('', [
    //     Validators.required,
    //     this.blockedWorsValidator,
    //   ]),
    //   amount: new FormControl('', [
    //     Validators.required,
    //     Validators.min(1),
    //     Validators.max(500),
    //   ]),
    //   date: new FormControl('2025-09-01'),
    //   priority: new FormControl('medium'),
    //   comment: new FormControl('', Validators.maxLength(this.maxCommentLength)),
    //   type: new FormControl('cash'),
    // });
  }

  onFormSubmit() {
    this.expenseForm.markAllAsTouched();

    if (this.expenseForm.invalid) return;

    console.log(this.expenseForm.value);
  }

  blockedWorsValidator(
    control: FormControl,
  ): { [key: string]: boolean } | null {
    if (blockedWords.includes(control.value.toLowerCase()))
      return { blockedWord: true };

    return null;
  }

  populateForm() {
    this.expenseForm.setValue({
      basicData: {
        title: 'From the backend',
        amount: 300,
        date: '2025-10-15',
      },
      comment: 'BACKEND COMMENT',
      priority: 'high',
      type: 'credit',
    });

    this.expenseForm.updateValueAndValidity();
  }
}
