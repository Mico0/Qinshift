# Angular Directives and Pipes

This document provides a **comprehensive guide** to Angular Directives and Pipes, including their types, most common use cases, best practices, and pitfalls to avoid.

---

## 📌 Directives in Angular

**Directives** are classes that can be attached to HTML elements to give them special behavior or modify them. They are fundamental building blocks of Angular and enable the creation of dynamic and interactive applications.

### 🔹 Types of Directives

There are **three main types** of directives:

---

### 1. Structural Directives

Structural directives **change the structure of the DOM**. They are identified by a `*` prefix when used in templates.

#### Common Structural Directives:

- **`*ngIf`** – Conditionally render elements.

  ```html
  <p *ngIf="isLoggedIn">Welcome back!</p>
  ```

  ✅ Use `*ngIf` when you want to completely remove or insert an element based on a condition.

- **`*ngFor`** – Repeat elements based on a collection.

  ```html
  <ul>
    <li *ngFor="let user of users">{{ user.name }}</li>
  </ul>
  ```

  ✅ Use `trackBy` for performance optimization in large lists:

  ```html
  <li *ngFor="let user of users; trackBy: trackByUserId">{{ user.name }}</li>
  ```

  ```ts
  trackByUserId(index: number, user: any) {
    return user.id;
  }
  ```

- **`*ngSwitch`** – Render one of many possible elements.
  ```html
  <div [ngSwitch]="status">
    <p *ngSwitchCase="'success'">✅ Success</p>
    <p *ngSwitchCase="'error'">❌ Error</p>
    <p *ngSwitchDefault>⏳ Loading...</p>
  </div>
  ```

#### Important Notes:

- `*` is Angular’s **syntactic sugar**. Angular translates it into a `<ng-template>` behind the scenes.
- Structural directives **remove/add elements** to the DOM at runtime, which can affect performance if overused.

⚠️ **Pitfall:** Don’t use more than one structural directive on the same element. Instead, wrap elements in an extra `<ng-container>`.

```html
<!-- ❌ Wrong -->
<div *ngIf="isVisible" *ngFor="let item of items">{{ item }}</div>

<!-- ✅ Correct -->
<ng-container *ngIf="isVisible">
  <div *ngFor="let item of items">{{ item }}</div>
</ng-container>
```

---

### 2. Attribute Directives

Unlike structural directives, **attribute directives do not change the DOM structure**. Instead, they modify the appearance or behavior of existing elements.

#### Common Attribute Directives:

- **`[ngClass]`** – Add/remove CSS classes dynamically.

  ```html
  <div [ngClass]="{ 'active': isActive, 'disabled': isDisabled }">Button</div>
  ```

- **`[ngStyle]`** – Apply styles dynamically.

  ```html
  <p [ngStyle]="{ 'color': isError ? 'red' : 'green' }">Status Message</p>
  ```

- **`[(ngModel)]`** – Two-way data binding.
  ```html
  <input [(ngModel)]="username" placeholder="Enter name" />
  <p>Hello {{ username }}</p>
  ```

⚠️ **Pitfall:** Don’t overuse `[ngStyle]` and `[ngClass]` for complex styling. Prefer **CSS classes** for better maintainability.

---

### 3. Component Directives

Components in Angular are also **directives with a template**. These are the most common directives used in Angular apps.

```ts
@Component({
  selector: "app-user-card",
  template: `<h2>{{ user.name }}</h2>`,
})
export class UserCardComponent {
  @Input() user: any;
}
```

Usage:

```html
<app-user-card [user]="selectedUser"></app-user-card>
```

✅ Best practice: Break large components into smaller, reusable ones.

---

### 🔹 Renderer2

**Renderer2** is a service for **safe and efficient DOM manipulation** in Angular. It ensures compatibility across platforms (e.g., web, mobile, server-side rendering).

Example: Creating a directive that changes background color on hover.

```ts
@Directive({
  selector: "[appHoverHighlight]",
})
export class HoverHighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, "backgroundColor", "yellow");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, "backgroundColor");
  }
}
```

Usage:

```html
<p appHoverHighlight>Hover me!</p>
```

⚠️ **Pitfall:** Avoid direct DOM manipulation with `document.querySelector`. Always use `Renderer2` to keep Angular apps secure and platform-independent.

---

## 📌 Pipes in Angular

**Pipes** are simple functions used in Angular templates to **transform data before displaying it**.

### 🔹 Types of Pipes

---

### 1. Built-in Pipes

Angular provides several **ready-to-use pipes**:

- **`date`** – Format dates.

  ```html
  <p>{{ today | date:'fullDate' }}</p>
  ```

- **`uppercase` / `lowercase`** – Transform text.

  ```html
  <p>{{ username | uppercase }}</p>
  ```

- **`currency`** – Format numbers as currency.

  ```html
  <p>{{ price | currency:'USD':'symbol' }}</p>
  ```

- **`percent`** – Format as percentage.

  ```html
  <p>{{ progress | percent }}</p>
  ```

- **`json`** – Pretty-print JSON.
  ```html
  <pre>{{ data | json }}</pre>
  ```

⚠️ **Tip:** Pipes are **pure by default**. They only re-run when input values change, which boosts performance.

---

### 2. Custom Pipes

When built-in pipes are not enough, you can create custom pipes.

Example: A pipe that capitalizes the first letter of each word.

```ts
@Pipe({ name: "capitalize" })
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\b\w/g, (char) => char.toUpperCase());
  }
}
```

Usage:

```html
<p>{{ 'angular pipes and directives' | capitalize }}</p>
```

---

### 🔹 Pipes by Transformation Type

- **Text Pipes:** `uppercase`, `lowercase`, `titlecase`, custom string formatters.
- **Number Pipes:** `currency`, `percent`, `decimal`.
- **Date Pipes:** `date`, custom date formats.

---

## ✅ Best Practices and Tips

- Use **`trackBy` in `*ngFor`** for better performance.
- Prefer **Renderer2** over direct DOM manipulation.
- Keep **custom pipes pure** whenever possible (for performance).
- Use **async pipe** (`| async`) with Observables instead of manual subscription/unsubscription.
  ```html
  <p>{{ user$ | async }}</p>
  ```
- Avoid putting **heavy logic in pipes** (they may run frequently).

---

## ⚠️ Common Pitfalls

- ❌ Using multiple structural directives on the same element.
- ❌ Overusing `ngStyle` instead of CSS classes.
- ❌ Writing impure pipes unless absolutely necessary (impure pipes run on every change detection cycle).
- ❌ Direct DOM manipulation with native JS (`document.getElementById`).

---

## 📚 Further Reading

- [Angular Directives Guide](https://angular.dev/guide/directives)
- [Angular Renderer2 API](https://angular.dev/api/core/Renderer2)
- [Angular Pipes Overview](https://angular.dev/guide/templates/pipes#overview)

---

This guide should give you a **solid understanding** of Directives and Pipes in Angular, their use cases, and how to apply them effectively in real-world applications.
