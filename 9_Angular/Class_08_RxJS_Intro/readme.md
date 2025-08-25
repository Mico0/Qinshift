# RxJS Guide

This document provides a **comprehensive guide** to RxJS concepts that are commonly used in Angular applications. It includes explanations, code examples, use cases, best practices, and pitfalls to avoid.

---

## 📌 What is RxJS?

**RxJS (Reactive Extensions for JavaScript)** is a library for **reactive programming using Observables**. It makes it easier to compose asynchronous or callback-based code. RxJS is widely used in Angular for handling:

- User interactions (clicks, typing, scrolling)
- HTTP requests and responses
- Real-time data streams
- Timers and intervals

---

## 🔹 Core Concepts in RxJS

1. **Observables**
2. **Observers**
3. **Subscriptions**
4. **Operators**
5. **Subjects**
6. **Schedulers**

In this guide, we’ll focus on Observables, Operators, Subjects, and Signals (from Angular).

---

## 1. Observables

An **Observable** represents a stream of data that arrives **over time**. It can emit multiple values asynchronously.

### Lifecycle of an Observable

1. **Create** – Define the Observable.
2. **Subscribe** – Consumers subscribe to it.
3. **Execution** – It starts emitting values.
4. **Complete / Error** – It either completes or throws an error.
5. **Unsubscribe** – Stop listening to the stream.

### Example: Simple Observable

```ts
import { Observable } from "rxjs";

const myObservable = new Observable((observer) => {
  observer.next("Hello");
  observer.next("World");
  observer.complete();
});

myObservable.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("Done"),
});
// Output:
// Hello
// World
// Done
```

---

### Cold vs Hot Observables

- **Cold Observables**
  - Start producing values **when someone subscribes**.
  - Each subscriber gets its own sequence.
  - Examples: `of()`, `from()`, `interval()`.

```ts
import { interval } from "rxjs";

const cold$ = interval(1000);

cold$.subscribe((val) => console.log("Subscriber A:", val));

setTimeout(() => {
  cold$.subscribe((val) => console.log("Subscriber B:", val));
}, 2000);
```

- **Hot Observables**
  - Start producing values **independently of subscribers**.
  - Subscribers share the same emissions.
  - Example: `Subject`.

```ts
import { Subject } from "rxjs";

const hot$ = new Subject();

hot$.subscribe((val) => console.log("Subscriber A:", val));
hot$.next(1);

hot$.subscribe((val) => console.log("Subscriber B:", val));
hot$.next(2);
```

---

## 2. Operators

**Operators** are pure functions that transform, filter, or combine Observables. They are used inside the `.pipe()` method and always return a **new Observable**.

### Categories of Operators

- **Creation Operators**

```ts
import { of, from, interval, timer } from "rxjs";

const numbers$ = of(1, 2, 3);
const array$ = from([10, 20, 30]);
const interval$ = interval(1000);
const timer$ = timer(2000);
```

- **Transformation Operators**

```ts
import { map, scan } from "rxjs";

numbers$.pipe(map((n) => n * 2)).subscribe((val) => console.log(val));

numbers$
  .pipe(scan((acc, n) => acc + n, 0))
  .subscribe((val) => console.log(val));
```

- **Filtering Operators**

```ts
import { filter, take, skip } from "rxjs";

numbers$
  .pipe(
    filter((n) => n > 1),
    take(2)
  )
  .subscribe((val) => console.log(val));
```

- **Combination Operators**

```ts
import { merge, concat, of } from "rxjs";

merge(of(1, 2), of(3, 4)).subscribe((val) => console.log(val));
concat(of("A", "B"), of("C")).subscribe((val) => console.log(val));
```

- **Utility Operators**

```ts
import { tap, delay, finalize, of } from "rxjs";

of("Hello")
  .pipe(
    tap((v) => console.log("Before delay:", v)),
    delay(1000),
    finalize(() => console.log("Stream complete"))
  )
  .subscribe((v) => console.log("After delay:", v));
```

---

## 3. Subjects

A **Subject** is both an Observable and an Observer.

- Can `subscribe()` like an Observable.
- Can `next()` values like an Observer.
- Useful for **multicasting** (one emission → many subscribers).

```ts
import { Subject } from "rxjs";

const subject = new Subject<number>();

subject.subscribe((val) => console.log("Subscriber A:", val));
subject.subscribe((val) => console.log("Subscriber B:", val));

subject.next(1);
subject.next(2);
```

### BehaviorSubject

- Stores the **latest value** and emits it to new subscribers.

```ts
import { BehaviorSubject } from "rxjs";

const behaviorSubject = new BehaviorSubject("Initial");

behaviorSubject.subscribe((val) => console.log("A:", val));

behaviorSubject.next("Updated");

behaviorSubject.subscribe((val) => console.log("B:", val));
```

---

## 4. Signals in Angular

Signals are a **new reactivity model in Angular** (not part of RxJS). They manage state more simply but can interop with Observables.

- **toSignal()** → Convert an Observable to a Signal.
- **toObservable()** → Convert a Signal to an Observable.
- **effect()** → Automatically run code when signals change.
- **model()** → For two-way form control binding.

```ts
import { signal, effect } from "@angular/core";

const count = signal(0);

effect(() => {
  console.log("Count changed:", count());
});

count.set(1);
count.set(2);
```

---

## ✅ Best Practices

- Use **operators instead of nested subscriptions**.
- Always **unsubscribe** (or use `async pipe` in Angular).
- Use **Subjects** for multicasting, but avoid them for simple state.
- Prefer **BehaviorSubject** when you need latest value on subscribe.
- Combine RxJS with **Signals** for clean Angular state management.

---

## ⚠️ Common Pitfalls

- Forgetting to unsubscribe → memory leaks.
- Overusing Subjects instead of leveraging operators.
- Mixing promises and observables incorrectly.
- Using hot observables when cold would be better.

---

## 📚 Resources

- [RxJS Official Docs](https://rxjs.dev/guide/overview)
- [RxJS Marbles](https://rxmarbles.com/)
- [Angular Signals Docs](https://angular.dev/guide/signals)

---

🚀 With this foundation, you can now confidently use RxJS in Angular projects!
