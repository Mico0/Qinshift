````markdown
# 📌 Angular Routing & JSON Server – Quick Guide

This guide covers the basics of **Angular Routing** and **JSON Server** usage, along with some additional important concepts for building and managing routes in Angular applications.

---

## ⚡ JSON Server – Quick API for Testing

`json-server` is a simple tool that allows you to quickly create a **mock REST API** without writing backend code.

### ✨ Key Features

- Reads a JSON file and automatically turns it into a REST API with **CRUD** routes.
- Uses standard **HTTP methods**:  
  `GET`, `POST`, `PUT`, `PATCH`, `DELETE`
- Perfect for prototyping and frontend development without a real backend.

### 📦 Installation

```bash
npm install -g json-server
```
````

### ▶️ Usage

```bash
json-server --watch db.json
```

- `db.json` – Your mock database file.
- API will be available at `http://localhost:3000`.

📄 [JSON Server Documentation](https://www.npmjs.com/package/json-server)

---

## 🚦 Angular Routing

Angular has **built-in routing** – no extra installation is required.

Routing allows navigation between different views/components without reloading the page, creating a **Single Page Application (SPA)** experience.

---

### 🔹 `<router-outlet>`

A special Angular directive that acts as a **placeholder** for rendering components based on the active route.

**How it works:**

1. The **Angular Router** checks the current route.
2. Finds the matching component for that route.
3. Injects the component into the `<router-outlet>`.

> Without `<router-outlet>`, Angular won't know where to display routed components.

Example:

```html
<app-header></app-header>
<router-outlet></router-outlet>
<app-footer></app-footer>
```

---

### 📜 `app.routes.ts` – Route Configuration

Defines all routes in the Angular app – acts like a **map**.

Example:

```typescript
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "**", redirectTo: "" }, // Wildcard for unknown routes
];
```

**Notes:**

- Routes are **read from top to bottom** (priority matters).
- Use **wildcard routes** (`**`) for 404 handling.
- Use **redirects** for default or outdated paths.

---

### 🚀 Lazy Loading with `loadComponent`

Lazy loading allows components to be loaded **only when needed** – improving performance, especially for large apps.

Example:

```typescript
{
  path: 'profile',
  loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
}
```

✅ Benefits:

- Faster initial load
- Components not in memory until needed
- Great for large applications

---

## 🔑 Additional Important Routing Concepts

### 1. **Route Parameters**

Pass dynamic values through the URL.

```typescript
{ path: 'user/:id', component: UserComponent }
```

Access in component:

```typescript
import { ActivatedRoute } from '@angular/router';

constructor(private route: ActivatedRoute) {
  this.route.params.subscribe(params => {
    console.log(params['id']);
  });
}
```

---

### 2. **Query Parameters**

Pass extra info without affecting route matching.

```typescript
this.router.navigate(["/products"], { queryParams: { category: "books" } });
```

Access:

```typescript
this.route.queryParams.subscribe((params) => {
  console.log(params["category"]);
});
```

---

### 3. **Route Guards**

Control navigation with guard services:

- `CanActivate` – Controls access **to** a route
- `CanDeactivate` – Controls leaving a route
- `Resolve` – Pre-fetch data before loading
- `CanLoad` – Prevents lazy module loading

Example:

```typescript
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
```

---

### 4. **Child Routes (Nested Routing)**

Organize routes hierarchically.

```typescript
{
  path: 'dashboard',
  component: DashboardComponent,
  children: [
    { path: 'stats', component: StatsComponent },
    { path: 'reports', component: ReportsComponent }
  ]
}
```

---

### 5. **Wildcard Route for 404 Pages**

Always define at the end:

```typescript
{ path: '**', component: NotFoundComponent }
```

---

## 📚 Official Angular Routing Documentation

🔗 [https://angular.dev/guide/routing](https://angular.dev/guide/routing)

---

## 🏁 Summary

- **JSON Server** – Quick mock backend for APIs.
- **Angular Router** – Built-in system for navigation in SPAs.
- `<router-outlet>` – Placeholder for routed components.
- **Lazy Loading** – Load components only when needed.
- **Extra Features** – Route parameters, query params, guards, nested routes.

With these tools, you can build dynamic, fast, and scalable Angular applications without needing a full backend for testing.

---

```

---

If you want, I can also **add diagrams** showing how Angular routing works with `<router-outlet>` and lazy loading.
That would make this README even more visual and beginner-friendly.
```
