import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Button } from '../../../../shared/components/button/button';
import { AuthService } from '../../../../core/services/auth-service';
import { RegisterReq } from '../../auth-model';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, Button],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private authService = inject(AuthService);

  registerForm = this.generateForm();

  isSubmitted = signal(false);

  generateForm() {
    return new FormGroup(
      {
        firstName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ]),
        username: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
        ]),
        confirmPassword: new FormControl('', Validators.required),
      },
      this.passwordMatchValidator,
    );
  }

  passwordMatchValidator(form: AbstractControl): null {
    const passwordCtrl = form.get('password');
    const confirmCtrl = form.get('confirmPassword');

    console.log('PASSWORD VALUE: ', passwordCtrl.value);
    console.log('CONFIRM VALUE: ', confirmCtrl.value);

    if (passwordCtrl.value !== confirmCtrl.value) {
      confirmCtrl.setErrors({ passwordMismatch: true });
    } else {
      delete confirmCtrl.errors?.passwordMismatch;
      confirmCtrl.setErrors({ ...confirmCtrl.errors });
    }

    return null;
  }

  // passwordMatchValidator(form: AbstractControl) {
  //   const passwordCtrl = form.get('password');
  //   const confirmCtrl = form.get('confirmPassword');

  //   console.log('PASSWORD VALUE: ', passwordCtrl.value);
  //   console.log('CONFIRM VALUE: ', confirmCtrl.value);

  //   if (passwordCtrl.value !== confirmCtrl.value)
  //     return { passwordMismatch: true };

  //   return null;
  // }

  onFormSubmit() {
    this.isSubmitted.set(true);
    this.registerForm.markAllAsTouched();

    if (this.registerForm.invalid) return;

    console.log(this.registerForm.value);

    const req: RegisterReq = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    };

    this.authService.registerUser(req);
  }
}
