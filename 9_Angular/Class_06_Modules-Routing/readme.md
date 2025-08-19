### This guide explains Angular **routing**, **lazy loading**, and **query parameters** in both:

1. **Standalone Components (Angular 15+)**
2. **Modular Angular (NgModules)**

Each section includes **examples, explanations, and pitfalls to avoid**.

---

## 1. What is Routing in Angular?

Routing lets us move between pages (components) in an Angular app without reloading the entire page. Instead of traditional HTML `<a href=...>`, Angular uses a router system to switch components dynamically.

---

## 2. Routing in Modular Angular (NgModules)

### Example: app-routing.module.ts

```ts
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

### Using routerLink in templates

```html
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
</nav>
```

---

## 3. Routing in Standalone Components (No NgModules)

In standalone Angular, we define routes directly and bootstrap the app without NgModules.

### Example: main.ts

```ts
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, Routes } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { HomeComponent } from "./app/home.component";
import { AboutComponent } from "./app/about.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
```

### Example: routerLink in standalone component template

```html
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
</nav>
```

✅ No NgModules required — routes are provided at bootstrap.

---

## 4. Lazy Loading

### Modular Angular (with NgModules)

```ts
const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "movies",
    loadChildren: () =>
      import("./movies/movies.module").then((m) => m.MoviesModule),
  },
];
```

➡️ `MoviesModule` is loaded only when user visits `/movies`.

### Standalone Components

```ts
const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "movies",
    loadComponent: () =>
      import("./movies/movies.component").then((c) => c.MoviesComponent),
  },
];
```

➡️ The component itself is lazy-loaded without a module.

📌 **Pitfall:** In modular apps, always use `forChild()` inside feature modules, not `forRoot()`.

---

## 5. Query Parameters

Query parameters are extra values passed in the URL, often for filtering or pagination.

Example URL:

```
http://localhost:4200/movies?sort=rating&page=2
```

### Reading Query Params (Works in Both Modular & Standalone)

#### Using Snapshot (for static params)

```ts
ngOnInit() {
  const sort = this.route.snapshot.queryParamMap.get('sort');
  const page = this.route.snapshot.queryParamMap.get('page');
  console.log(sort, page);
}
```

#### Using Subscribe (for dynamic changes)

```ts
ngOnInit() {
  this.route.queryParams.subscribe(params => {
    console.log(params['sort']);
    console.log(params['page']);
  });
}
```

📌 **Mistake to avoid:** If you use `subscribe`, always unsubscribe in `ngOnDestroy()`.

---

## 6. Putting It Together

### Modular Angular Example

**app-routing.module.ts**

```ts
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  {
    path: "movies",
    loadChildren: () =>
      import("./movies/movies.module").then((m) => m.MoviesModule),
  },
];
```

### Standalone Angular Example

**main.ts**

```ts
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  {
    path: "movies",
    loadComponent: () =>
      import("./movies/movies.component").then((c) => c.MoviesComponent),
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
```

### movies-list.component.ts (works in both)

```ts
ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.sortBy = params['sort'] || 'likeCount';
    this.page = params['page'] || 1;
    this.loadMovies();
  });
}
```

### movies-list.component.html

```html
<a [routerLink]="['/movies']" [queryParams]="{ sort: 'rating', page: 1 }">
  Sort by Rating
</a>
```

---

## ✅ Key Takeaways

- **Standalone Angular**: Use `provideRouter()` and `loadComponent()`.
- **Modular Angular**: Use `RouterModule.forRoot()` and `loadChildren()`.
- **routerLink** replaces `href` for navigation.
- **Lazy loading** improves performance by loading routes/components only when needed.
- Use **Snapshot** for static query params and **Subscribe** for dynamic ones.
- Always clean up subscriptions to avoid memory leaks.
