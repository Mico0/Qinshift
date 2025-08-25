import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss',
})
export class ReactiveForm {
  expenseForm = this.generateExpenseForm();

  generateExpenseForm() {
    return new FormGroup({
      title: new FormControl(''),
      amount: new FormControl(''),
      date: new FormControl('2024-08-09'),
      priority: new FormControl('medium'),
      comment: new FormControl(''),
      type: new FormControl('cash'),
    });
  }

  onFormSubmit() {
    console.log(this.expenseForm.value);
  }
}
