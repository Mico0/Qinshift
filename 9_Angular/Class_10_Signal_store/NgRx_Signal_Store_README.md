# NgRx Signal Store — Complete Guide

> **Goal:** This `README.md` is a practical yet comprehensive guide for NgRx **Signal Store** in Angular: concepts, installation, API, code examples, tips & tricks, common use cases, pitfalls, and Redux DevTools integration.

- Official Docs: https://ngrx.io/guide/signals/signal-store  
- Redux DevTools (Chrome Extension): https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd  
- NgRx Toolkit (DevTools for Signal Store): `npm i @angular-architects/ngrx-toolkit`

---

## Table of Contents
1. What is Signal Store and Why
2. Installation & Setup
3. Core Concepts (features)
   - withState • withMethods • withHooks • withComputed • withEntities
4. patchState() — Updating State Correctly
5. Minimal Example (CounterStore)
6. Async Calls (HttpClient, RxJS, rxMethod)
7. withEntities — Managing Collections
8. Integration with Components & DI
9. Redux DevTools Integration
10. Common Use Cases
11. Tips & Tricks
12. Common Pitfalls
13. File Structure
14. Testing
15. References

---

## 1. What is Signal Store and Why
**NgRx Signal Store** is a modern, reactive state management solution for Angular built on top of **Angular Signals**.  
Instead of classical reducers/actions/effects, Signal Store offers a **structured yet compact API** via *features* and **Signals**.

✅ Benefits:
- Reactive state without boilerplate
- Simple composition with `signalStore(...)`
- Derived state with `computed()`
- Strong typing and scoped feature-based state
- Smaller learning curve compared to NgRx Store

---

## 2. Installation & Setup
```bash
npm i @ngrx/signals
npm i @angular-architects/ngrx-toolkit   # optional DevTools integration
```

---

## 3. Core Concepts (features)

### withState
Defines initial state. Every property becomes a **Signal**.

```ts
import { signalStore, withState } from '@ngrx/signals';

type CounterState = {
  count: number;
};

export const CounterStore = signalStore(
  { providedIn: 'root' },
  withState<CounterState>({ count: 0 })
);
```

### withMethods
Adds methods for updating state and side effects.

```ts
import { patchState, withMethods } from '@ngrx/signals';

export const CounterStore = signalStore(
  { providedIn: 'root' },
  withState<CounterState>({ count: 0 }),
  withMethods((store) => ({
    inc() {
      patchState(store, (state) => ({ count: state.count + 1 }));
    },
    dec() {
      patchState(store, (state) => ({ count: state.count - 1 }));
    },
  }))
);
```

### withHooks
Lifecycle hooks like `onInit`, `onDestroy`.

```ts
import { withHooks } from '@ngrx/signals';

withHooks({
  onInit(store) {
    console.log('Store initialized', store.state());
  },
  onDestroy(store) {
    console.log('Store destroyed');
  }
});
```

### withComputed
Create derived signals from state.

```ts
import { computed, withComputed } from '@ngrx/signals';

withComputed((store) => ({
  double: computed(() => store.count() * 2)
}));
```

### withEntities
Manages collections of entities.

```ts
import { withEntities } from '@ngrx/signals/entities';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export const TodoStore = signalStore(
  { providedIn: 'root' },
  withEntities<Todo>()
);
```

---

## 4. patchState() — Updating State Correctly
Always use `patchState`. Never mutate state directly.

```ts
patchState(store, { count: store.count() + 1 });
```

With function form:
```ts
patchState(store, (state) => ({ count: state.count + 1 }));
```

---

## 5. Minimal Example (CounterStore)
```ts
import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';

type CounterState = { count: number };

export const CounterStore = signalStore(
  { providedIn: 'root' },
  withState<CounterState>({ count: 0 }),
  withMethods((store) => ({
    inc: () => patchState(store, (s) => ({ count: s.count + 1 })),
    dec: () => patchState(store, (s) => ({ count: s.count - 1 })),
  }))
);
```

Component usage:
```ts
@Component({
  selector: 'app-counter',
  template: `
    <div>Count: {{ store.count() }}</div>
    <button (click)="store.inc()">+</button>
    <button (click)="store.dec()">-</button>
  `
})
export class CounterComponent {
  store = inject(CounterStore);
}
```

---

## 6. Async Calls (HttpClient, RxJS, rxMethod)
```ts
import { rxMethod } from '@ngrx/signals/rxjs';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';

type User = { id: number; name: string };

export const UserStore = signalStore(
  { providedIn: 'root' },
  withState<{ users: User[]; loading: boolean }>({ users: [], loading: false }),
  withMethods((store) => {
    const http = inject(HttpClient);
    return {
      loadUsers: rxMethod<void>(
        switchMap(() => {
          patchState(store, { loading: true });
          return http.get<User[]>('/api/users').pipe(
            tap((users) => patchState(store, { users, loading: false }))
          );
        })
      )
    };
  })
);
```

---

## 7. withEntities — Managing Collections
```ts
import { signalStore } from '@ngrx/signals';
import { withEntities, patchState } from '@ngrx/signals/entities';

interface Todo { id: string; title: string; completed: boolean; }

export const TodoStore = signalStore(
  { providedIn: 'root' },
  withEntities<Todo>()
);

// Usage
const store = inject(TodoStore);
store.addEntities([{ id: '1', title: 'Learn NgRx', completed: false }]);
store.updateEntities({ id: '1', changes: { completed: true } });
store.removeEntities('1');
```

---

## 8. Integration with Components & DI
```ts
@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of store.entities()">{{ todo.title }}</li>
    </ul>
  `
})
export class TodoListComponent {
  store = inject(TodoStore);
}
```

---

## 9. Redux DevTools Integration
```ts
import { provideSignalStoreDevtools } from '@angular-architects/ngrx-toolkit';

bootstrapApplication(AppComponent, {
  providers: [
    provideSignalStoreDevtools()
  ]
});
```

---

## 10. Common Use Cases
- Counters, toggles
- Async data fetching with HttpClient
- Entity management (todos, users, products)
- UI state (sidebars, modals, filters)
- Derived state (sorting, filtering, computed values)

---

## 11. Tips & Tricks
- Use `computed` for all derived values
- Keep stores small and focused per domain/feature
- Combine multiple stores for complex apps
- Always use `patchState` for immutability
- Use `rxMethod` for RxJS-based flows

---

## 12. Common Pitfalls
- ❌ Mutating arrays/objects → always return new references
- ❌ Forgetting to call signals as functions `store.count()`
- ❌ Wrong feature order: `withMethods` must come before `withHooks`
- ❌ Missing `catchError` in RxJS pipelines
- ❌ Duplicate `collection` names in `withEntities`
- ❌ Missing `selectId` for entities without `id`

---

## 13. File Structure
```
src/app/
  stores/
    counter/
      counter.store.ts
    todos/
      todos.store.ts
  features/
    todos/
      todos.component.ts
      todos.routes.ts
  services/
    api.service.ts
```

---

## 14. Testing
```ts
it('inc should increment count', () => {
  const store = inject(CounterStore);
  expect(store.count()).toBe(0);
  store.inc();
  expect(store.count()).toBe(1);
});
```

---

## 15. References
- Official Docs: https://ngrx.io/guide/signals/signal-store
- Entity Management: https://ngrx.io/guide/signals/signal-store/entity-management
- Redux DevTools: https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
- NgRx Toolkit: https://ngrx-toolkit.angulararchitects.io/
