import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Button } from '../../../../shared/components/button/button';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, Button],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm = this.generateForm();

  generateForm() {
    return new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onFormSubmit() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) return;

    console.log(this.loginForm.value);
  }
}
