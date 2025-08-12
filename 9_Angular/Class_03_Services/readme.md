# Angular – Атрибутски директиви и сервиси

## Атрибутска директива (`ngStyle`)

На почеток на часот низ практичен пример го објаснивме **`ngStyle`** – атрибутска директива во Angular која овозможува динамично менување стилови на компонента.

> Атрибутска директива во Angular е посебен вид директива што го менува изгледот или однесувањето на постоечки HTML елемент, но **не додава нов елемент во DOM-от**.

**Пример – користење на `ngStyle`:**

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  isActive = true;

  getStyles() {
    return {
      color: this.isActive ? 'white' : 'black',
      backgroundColor: this.isActive ? 'green' : 'lightgray',
      padding: '10px',
      borderRadius: '5px'
    };
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
```

```html
<!-- app.component.html -->
<div [ngStyle]="getStyles()">
  Dynamic style with ngStyle
</div>

<button (click)="toggleActive()">Toggle Style</button>
```

---

## Креирање на апликација "Movie Service" и објаснување за сервисите

Во Angular, **services** се класи кои служат за споделување податоци и логика помеѓу различни компоненти.

- Наместо да ја повторуваме истата логика во секоја компонента, ја ставаме во сервис и потоа ја користиме каде што е потребно.
- Бизнис логиката се наоѓа во сервисот.

---

### Сервисите се користат за:

- ♻ **Повторна употреба на код** (*reuse*).
- 📦 **Разделување на логиката од компонентите**.
- 🔄 **Комуникација меѓу компоненти**.
- 🌐 **HTTP повици до API** (преку `HttpClient`).
- 📌 **Чување состојба** (*state*) која треба да е иста низ целата апликација.

---

### Креирање на сервис

```bash
ng g s name-of-service
```

**Пример:**

```bash
ng g s logger-service
```

Ова креира датотека `logger-service.ts` со класа и `@Injectable()` декоратор.

---

## Singleton во Angular

Angular автоматски обезбедува **една инстанца** од сервис (singleton), па состојбата останува зачувана додека апликацијата работи.

---

## Како да избегнеме автоматско креирање на `spec.ts` тест фајлови

**Метод 1:** Преку CLI  
```bash
ng g c logger-service --skip-tests
```

**Метод 2:** Преку `angular.json`

```json
"schematics": {
  "@schematics/angular:component": {
    "skipTests": true
  },
  "@schematics/angular:service": {
    "skipTests": true
  }
}
```

---

## Користење на сигнали (*signals*) во сервисите

**Предности на сигналите:**

- 🔄 При промена на основната вредност, сите **пресметани сигнали** автоматски се ажурираат.
- 🚀 Подобри перформанси – само компонентите што користат променети сигнали се ре-рендерираат.
- 🛡 Целосна **TypeScript** поддршка и типска безбедност.

**Пример – сервис со `signals`:**

```typescript
// movie.service.ts
import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies = signal<string[]>(['Inception', 'Interstellar', 'The Dark Knight']);

  movieCount = computed(() => this.movies().length);

  getMovies() {
    return this.movies();
  }

  addMovie(title: string) {
    this.movies.update(m => [...m, title]);
  }

  removeMovie(title: string) {
    this.movies.update(m => m.filter(movie => movie !== title));
  }
}
```

---

## Dependency Injection (DI) во Angular

**Dependency Injection** е **дизајн патерн** што овозможува објектите да ги добијат своите зависности од надворешен извор, наместо да ги креираат самите.

Во Angular, **DI** е вградена функционалност за лесно споделување на сервиси меѓу компонентите.

> Нашата апликација користи модерен Angular начин за инјекција со `inject()`.

**Пример – користење на `inject()` за DI:**

```typescript
// movie-list.component.ts
import { Component, inject } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  template: `
    <h2>Movies ({{ movieService.movieCount() }})</h2>
    <ul>
      <li *ngFor="let movie of movieService.getMovies()">{{ movie }}</li>
    </ul>
    <button (click)="addMovie()">Add Movie</button>
  `
})
export class MovieListComponent {
  movieService = inject(MovieService);

  addMovie() {
    const title = prompt('Enter movie title:');
    if (title) {
      this.movieService.addMovie(title);
    }
  }
}
```

---

✅ Со овие примери, добивме:  
- Демонстрација на **`ngStyle`** за динамично менување стилови.  
- **Сервис со `signals`** за состојба и логика.  
- **`inject()`** за современо и лесно вбризгување на сервиси во компоненти.  
