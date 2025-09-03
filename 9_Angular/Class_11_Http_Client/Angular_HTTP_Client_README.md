````markdown
# Angular HttpClient — Complete Guide

> This guide covers everything you need to know about using **HttpClient** in Angular, including GET, POST, PUT, DELETE requests, error handling, interceptors, typed requests, and best practices.

---

## Table of Contents

1. Introduction to HttpClient
2. Setting Up HttpClient
3. Basic HTTP Requests
   - GET
   - POST
   - PUT
   - DELETE
4. Handling Observables
5. Error Handling
6. HTTP Options (Headers, Params)
7. Interceptors
8. Typed Requests
9. Practical Examples
10. Best Practices & Pitfalls
11. References

---

## 1. Introduction to HttpClient

Angular's `HttpClient` is a built-in service for performing HTTP requests.  
It is built on **Observables** and integrates seamlessly with Angular's reactive programming model.

Benefits:

- Type safety with generics
- Supports interceptors for logging, authentication, error handling
- Works natively with RxJS operators

---

## 2. Setting Up HttpClient

To make `HttpClient` available globally in your app, provide it in `app.config.ts`:

```ts
import { provideHttpClient } from "@angular/common/http";

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()],
});
```
````

> Alternatively, in older Angular modules:
> `imports: [HttpClientModule]`

Inject `HttpClient` in a service or component:

```ts
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";

export class ApiService {
  http = inject(HttpClient);
}
```

---

## 3. Basic HTTP Requests

### GET Request

```ts
this.http.get<User[]>("/api/users").subscribe({
  next: (users) => console.log(users),
  error: (err) => console.error(err),
});
```

### POST Request

```ts
this.http
  .post("/api/users", { name: "John", email: "john@example.com" })
  .subscribe();
```

### PUT Request

```ts
this.http.put("/api/users/1", { name: "John Updated" }).subscribe();
```

### DELETE Request

```ts
this.http.delete("/api/users/1").subscribe();
```

---

## 4. Handling Observables

HttpClient returns **Observables**, which can be handled using:

- `subscribe()`:

```ts
this.http.get("/api/data").subscribe((data) => console.log(data));
```

- `async` pipe in templates:

```ts
users$ = this.http.get<User[]>('/api/users');

<ul>
  <li *ngFor="let user of users$ | async">{{ user.name }}</li>
</ul>
```

- RxJS operators (`map`, `tap`, `catchError`, etc.):

```ts
import { catchError, tap } from "rxjs/operators";
import { of } from "rxjs";

this.http
  .get("/api/data")
  .pipe(
    tap((data) => console.log("Data received", data)),
    catchError((err) => {
      console.error(err);
      return of([]);
    })
  )
  .subscribe();
```

---

## 5. Error Handling

### Per-request error handling:

```ts
this.http.get("/api/data").subscribe({
  next: (res) => console.log(res),
  error: (err) => console.error("Request failed", err),
});
```

### Global error handling with interceptor:

```ts
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) => {
        console.error("HTTP Error:", err);
        return throwError(() => err);
      })
    );
  }
}
```

---

## 6. HTTP Options (Headers, Params)

Send headers or query parameters with requests:

```ts
import { HttpHeaders, HttpParams } from "@angular/common/http";

const headers = new HttpHeaders().set("Authorization", "Bearer TOKEN");
const params = new HttpParams().set("page", "1").set("limit", "10");

this.http.get("/api/users", { headers, params }).subscribe();
```

---

## 7. Interceptors

Interceptors are used for:

- Adding authentication tokens
- Logging requests/responses
- Handling global errors

Example:

```ts
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return next.handle(authReq);
  }
}
```

Register in providers:

```ts
providers: [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
```

---

## 8. Typed Requests

Always use generics for type safety:

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

this.http.get<User[]>("/api/users").subscribe((users) => {
  users.forEach((u) => console.log(u.name));
});
```

---

## 9. Practical Examples

### Fetch a list of users

```ts
users$ = this.http.get<User[]>("/api/users");
```

### Submit a login form

```ts
loginForm = this.fb.group({ email: [''], password: [''] });

onSubmit() {
  if (this.loginForm.valid) {
    this.http.post('/api/login', this.loginForm.value).subscribe(console.log);
  }
}
```

### Update a resource

```ts
this.http.put(`/api/users/${user.id}`, { name: "Updated Name" }).subscribe();
```

### Delete a resource

```ts
this.http.delete(`/api/users/${id}`).subscribe();
```

---

## 10. Best Practices & Pitfalls

- ✅ Use services to encapsulate API calls
- ✅ Use `async` pipe instead of subscribing in templates
- ✅ Cancel subscriptions when component is destroyed (`takeUntil`)
- ❌ Avoid nested subscriptions
- ❌ Don’t ignore errors — always use `catchError` or `subscribe` error callback
- ❌ Hardcoding URLs — use environment variables

---

## 11. References

- Angular HttpClient: [https://angular.io/guide/http](https://angular.io/guide/http)
- RxJS Operators: [https://rxjs.dev/guide/operators](https://rxjs.dev/guide/operators)
- HTTP Interceptors: [https://angular.io/guide/http#intercepting-requests-and-responses](https://angular.io/guide/http#intercepting-requests-and-responses)

```

---

If you want, I can **also generate a ready-to-download `Angular_HTTP_Guide.md` file** exactly like this, so you don’t have to copy-paste.

Do you want me to do that next?
```
