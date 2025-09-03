# Angular Reactive Forms — Complete Guide

> This `README.md` is a comprehensive guide to **Reactive Forms** in Angular.  
> It covers the core building blocks (`FormControl`, `FormGroup`, `FormBuilder`), validation, form statuses, custom validators, binding, and integration with `HttpClient`.

---

## Table of Contents

1. Introduction
2. Core Building Blocks
   - FormControl
   - FormGroup
   - FormBuilder
3. Control Statuses Explained
4. Validation in Reactive Forms
   - Built-in Validators
   - Custom Validators
5. Binding Controls with `formControlName`
6. Using HttpClient with Reactive Forms
7. Tips & Tricks
8. Common Pitfalls
9. Example Project Structure
10. References

---

## 1. Introduction

Angular provides two main approaches for building forms:

1. **Reactive Forms** → structured, programmatic, and easier to test (recommended for complex forms).
2. **Template-Driven Forms** → simpler, more declarative, but harder to scale.

This guide focuses entirely on **Reactive Forms**.

---

## 2. Core Building Blocks

### FormControl

Represents a single input element (text, select, checkbox…).  
It holds:

- `value` → the current value
- `status` → valid, invalid, touched, untouched, dirty, pristine
- `validators` → validation functions

`````ts
import { FormControl } from '@angular/forms';

const nameControl = new FormControl('', { nonNullable: true });
console.log(nameControl.value); // ''

Perfect 👍 Here’s the full **`Angular_Reactive_Forms_README.md`** content — just copy and paste it into a file on your machine:

````markdown
# Angular Reactive Forms — Complete Guide

> This `README.md` is a comprehensive guide to **Reactive Forms** in Angular.
> It covers the core building blocks (`FormControl`, `FormGroup`, `FormBuilder`), validation, form statuses, custom validators, binding, and integration with `HttpClient`.

---

## Table of Contents
1. Introduction
2. Core Building Blocks
   - FormControl
   - FormGroup
   - FormBuilder
3. Control Statuses Explained
4. Validation in Reactive Forms
   - Built-in Validators
   - Custom Validators
5. Binding Controls with `formControlName`
6. Using HttpClient with Reactive Forms
7. Tips & Tricks
8. Common Pitfalls
9. Example Project Structure
10. References

---

## 1. Introduction

Angular provides two main approaches for building forms:

1. **Reactive Forms** → structured, programmatic, and easier to test (recommended for complex forms).
2. **Template-Driven Forms** → simpler, more declarative, but harder to scale.

This guide focuses entirely on **Reactive Forms**.

---

## 2. Core Building Blocks

### FormControl
Represents a single input element (text, select, checkbox…).
It holds:
- `value` → the current value
- `status` → valid, invalid, touched, untouched, dirty, pristine
- `validators` → validation functions

```ts
import { FormControl } from '@angular/forms';

const nameControl = new FormControl('', { nonNullable: true });
console.log(nameControl.value); // ''
`````

### FormGroup

A collection of `FormControl` objects grouped together.

```ts
import { FormGroup, FormControl } from "@angular/forms";

const profileForm = new FormGroup({
  firstName: new FormControl(""),
  lastName: new FormControl(""),
});
```

### FormBuilder

Service that simplifies creation of `FormGroup` and `FormControl`.

```ts
import { FormBuilder, Validators } from "@angular/forms";
import { inject } from "@angular/core";

export class ProfileComponent {
  fb = inject(FormBuilder);

  profileForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: [""],
    email: ["", [Validators.required, Validators.email]],
  });
}
```

---

## 3. Control Statuses Explained

Each `FormControl` tracks different states:

- **valid** → control passed all validation rules
- **invalid** → control failed validation
- **touched** → control was focused and then blurred
- **untouched** → control never received focus
- **dirty** → value has been changed by user
- **pristine** → value is unchanged since initialization

```ts
if (nameControl.invalid && nameControl.touched) {
  console.log("Show validation error");
}
```

---

## 4. Validation in Reactive Forms

### Built-in Validators

Angular provides common validators:

- `Validators.required`
- `Validators.minLength(n)`
- `Validators.maxLength(n)`
- `Validators.email`

```ts
this.loginForm = this.fb.group({
  email: ["", [Validators.required, Validators.email]],
  password: ["", [Validators.required, Validators.minLength(6)]],
});
```

### Custom Validators

Custom validators return `null` if valid, or `{errorName: true}` if invalid.

```ts
import { AbstractControl, ValidationErrors } from "@angular/forms";

export function forbiddenNameValidator(
  control: AbstractControl
): ValidationErrors | null {
  const forbidden = control.value?.toLowerCase() === "admin";
  return forbidden ? { forbiddenName: true } : null;
}

// Usage
this.userForm = this.fb.group({
  username: ["", forbiddenNameValidator],
});
```

Async Validators are also supported using Observables/Promises.

---

## 5. Binding Controls with `formControlName`

Bind form controls to template inputs:

```html
<form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="firstName" placeholder="First Name" />
  <input type="text" formControlName="lastName" placeholder="Last Name" />
  <input type="email" formControlName="email" placeholder="Email" />
  <button type="submit" [disabled]="profileForm.invalid">Submit</button>
</form>
```

---

## 10. References

- Angular Docs: [https://angular.io/guide/reactive-forms](https://angular.io/guide/reactive-forms)
- Validators: [https://angular.io/api/forms/Validators](https://angular.io/api/forms/Validators)

```

---

```
