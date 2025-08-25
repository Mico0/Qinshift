import { TitleCasePipe } from '@angular/common';
import { Component, viewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, TitleCasePipe],
  templateUrl: './template-form.html',
  styleUrl: './template-form.scss',
})
export class TemplateForm {
  expenseForm = viewChild<NgForm>('expenseForm');
  expenseTitle = viewChild<NgModel>('expenseTitle');

  paymentTypes: string[] = ['cash', 'credit'];

  ngOnInit() {
    console.log('Signal View Child', this.expenseForm());

    console.log(this.expenseForm()?.invalid);
  }

  onFormSubmit(form: NgForm) {
    console.log(form.value);
    console.log('These are the form errors');
    console.log(form.errors);
    console.log('Is form valid: ', form.valid);
    console.log('Is form invalid: ', form.invalid);

    console.log('EXPENSE TITLE ERRORS: ', this.expenseTitle()?.errors);
  }
}
