import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

const blockedWords: string[] = [
  'money',
  'casino',
  'betting',
  'drugs',
  'guns',
  'french words',
];

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

  ngOnInit() {
    this.expenseForm.controls.comment.valueChanges.subscribe((value) => {
      console.log('this is this current value of the comment input: ', value);
    });
  }

  generateExpenseForm() {
    return new FormGroup({
      basicData: new FormGroup({
        title: new FormControl('', [
          Validators.required,
          this.blockedWordsValidator,
        ]),
        amount: new FormControl(0, [
          Validators.required,
          Validators.min(1),
          Validators.max(500),
        ]),
        date: new FormControl('2025-09-01', Validators.required),
      }),
      priority: new FormControl('medium'),
      comment: new FormControl('', Validators.maxLength(this.maxCommentLength)),
      type: new FormControl('cash'),
    });
    //Linear form ( without grouping )
    //   return new FormGroup({
    //     title: new FormControl('', [
    //       Validators.required,
    //       this.blockedWordsValidator,
    //     ]),
    //     amount: new FormControl('', [
    //       Validators.required,
    //       Validators.min(1),
    //       Validators.max(500),
    //     ]),
    //     date: new FormControl('2025-09-01', Validators.required),
    //     priority: new FormControl('medium'),
    //     comment: new FormControl('', Validators.maxLength(this.maxCommentLength)),
    //     type: new FormControl('cash'),
    //   });
  }

  onFormSubmit() {
    this.expenseForm.markAllAsTouched();

    if (this.expenseForm.invalid) return;

    console.log(this.expenseForm.value);
  }

  //When validator functions return null the value is valid when they return an object then the value is invalid
  blockedWordsValidator(
    control: FormControl,
  ): { [key: string]: boolean } | null {
    console.log('validator fired');
    //This is invalid case
    if (blockedWords.includes(control.value.toLowerCase()))
      return { blockedWord: true };

    //This is valid case
    return null;
  }

  populateForm() {
    this.expenseForm.setValue({
      basicData: {
        title: 'FROM THE BACKEND',
        amount: 300,
        date: '2025-10-15',
      },
      comment: 'BACKEND COMMENT HERE',
      priority: 'high',
      type: 'cash',
    });

    this.expenseForm.updateValueAndValidity();
  }
}
