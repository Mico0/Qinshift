# Angular Forms – Detailed Guide

Forms are a core part of most applications because they allow us to capture user input. In Angular, forms are powerful, flexible, and come with built-in support for validation, state management, and data binding.

This document provides a **deep dive into Angular forms**, including **Reactive Forms**, **Template-Driven Forms**, validation, form states, and useful tips/pitfalls.

---

## 📌 Why Forms Are Important
Forms are needed whenever we need user input, for example:
- **Login Form** (username + password)
- **Registration Form** (name, email, password, confirm password)
- **Search Field**

Angular provides two main approaches for working with forms:
1. **Reactive Forms** (model-driven)
2. **Template-Driven Forms** (template-driven)

---

## ⚡ Reactive Forms
Reactive Forms are also called **model-driven forms** because the form’s structure and logic are defined inside the **TypeScript component**, not in the template.

### 🔑 Key Concepts
- Built using **FormControl**, **FormGroup**, and **FormArray**.
- **Synchronous data flow**: when a value changes in the input, the model is immediately updated.
- Explicit and predictable – the developer has full control.

### ✅ Advantages
- **Flexible and scalable** – great for large applications.
- **Easy to test**.
- Clear separation between business logic (TypeScript) and view (HTML).

### 🚀 Common Use Case Example
```ts
// login.component.ts
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
```

```html
<!-- login.component.html -->
<form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="username" placeholder="Username">
  <input type="password" formControlName="password" placeholder="Password">
  <button type="submit" [disabled]="loginForm.invalid">Login</button>
</form>
```

---

## 📝 Template-Driven Forms
Template-Driven Forms are more **declarative**, with form logic written directly in the **HTML template** using Angular directives.

### 🔑 Key Concepts
- Uses **ngModel** for two-way data binding.
- Angular automatically creates FormControl objects behind the scenes.
- Simpler and faster to get started.

### ✅ Advantages
- Easy to learn.
- Good for small or simple forms.

### 🚀 Common Use Case Example
```ts
// register.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  user = {
    name: '',
    email: ''
  };

  onSubmit() {
    console.log(this.user);
  }
}
```

```html
<!-- register.component.html -->
<form #registerForm="ngForm" (ngSubmit)="onSubmit()">
  <input type="text" [(ngModel)]="user.name" name="name" required>
  <input type="email" [(ngModel)]="user.email" name="email" required>
  <button type="submit" [disabled]="!registerForm.valid">Register</button>
</form>
```

---

## 🛠️ Core Classes in Angular Forms
Both Reactive and Template-Driven forms are built on these foundational classes:

### FormControl
Represents a single form input (e.g., one input field).

### FormGroup
Groups multiple FormControls into a structured form (e.g., firstName + lastName + email).

### FormArray
Represents a dynamic list of inputs (e.g., adding multiple phone numbers).

### ControlValueAccessor
Interface used by Angular to connect custom form controls with the form API.

---

## 🔍 Form States
Each input and form can have different states, which Angular tracks automatically:

- **valid / invalid** → whether the field passes validation.
- **touched / untouched** → whether the user interacted with the field.
- **dirty / pristine** → whether the field value was modified.
- **pending** → if async validation is still running.

Example of displaying validation errors:
```html
<input type="email" formControlName="email">
<div *ngIf="loginForm.get('email')?.invalid && loginForm.get('email')?.touched">
  Please enter a valid email address.
</div>
```

---

## ✅ Validation

### 1. Built-in Validators
Angular provides ready-to-use validators:
- required
- minlength / maxlength
- pattern
- email

Example:
```ts
new FormControl('', [Validators.required, Validators.email])
```

### 2. Custom Validators
When built-in validators are not enough, we can create our own:

```ts
import { AbstractControl, ValidationErrors } from '@angular/forms';

export function forbiddenNameValidator(control: AbstractControl): ValidationErrors | null {
  const forbidden = control.value?.toLowerCase() === 'admin';
  return forbidden ? { forbiddenName: { value: control.value } } : null;
}
```

Usage:
```ts
username: new FormControl('', [forbiddenNameValidator])
```

---

## 📌 ViewChild
@ViewChild is a decorator that allows the parent component to access a child component, directive, template, or DOM element.

### Common Use Cases
- Accessing a child component’s methods.
- Manipulating DOM elements directly.
- Controlling a template-driven form (NgForm) instance.

Example:
```ts
@ViewChild('registerForm') registerForm: any;

submit() {
  console.log(this.registerForm.value);
}
```

---

## ⚠️ Tips & Pitfalls

- ✅ Use Reactive Forms for large, complex applications – more maintainable.
- ✅ Use Template-Driven Forms for small/simple apps.
- ⚠️ Avoid mixing Reactive and Template-Driven forms in the same component.
- ⚠️ Always handle form validation errors gracefully.
- ✅ Use FormArray for dynamic fields instead of hacking *ngFor with template-driven forms.
- ✅ Write custom validators for domain-specific rules (e.g., password strength, forbidden words).
- ⚠️ Direct DOM manipulation should be minimized – prefer Angular APIs.

---

## 📚 Further Reading
- [Angular Forms Documentation](https://angular.dev/guide/forms)
- [Reactive Forms API](https://angular.dev/api/forms)

---

## ✅ Summary
- **Reactive Forms** → Model-driven, scalable, good for large apps.
- **Template-Driven Forms** → Simple, quick to implement, good for small apps.
- **FormControl, FormGroup, FormArray** → Building blocks of Angular forms.
- **Validation** → Built-in + custom validators.
- **Form States** → Useful for error messages and UX.
- **ViewChild** → Access and control child components/forms.

By understanding both approaches and their trade-offs, you can choose the right form strategy for your Angular projects.
