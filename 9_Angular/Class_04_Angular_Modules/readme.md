# Angular – Модули (Modules) и BehaviorSubject

## Што се Модули во Angular?

Во постарите верзии на Angular (**v17**, **v16** и пониски), апликациите се градеа со **модулна архитектура**.

**NgModule** е основата на модулната архитектура и овозможува создавање на добро организирани, одржливи и скалабилни апликации.

NgModule е **TypeScript** класа означена со `@NgModule` декоратор.

> Тој му кажува на Angular како да повика компоненти, да ги собере потребните зависности и како да го конфигурира **dependency injection** системот.

---

## Иницијализација на проект со Modules

```bash
ng new movies-app --no-standalone
```

- **`--no-standalone`** е опција во Angular CLI која ја деактивира standalone компонентата и ја враќа апликацијата на **традиционалната модулна архитектура**.

---

### CLI Прашања при иницијализација

1. **Do you want to create a 'zoneless' application without zone.js ?** – **No**  
2. **Which stylesheet format would you like to use?** – Избираме **Sass (SCSS)**  
3. **Do you want to enable Server-Side Rendering (SSR) and Static Site Generation?** – **No**  

---

## Пример: `app.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideBrowserGlobalErrorListeners } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

---

## Главни делови на `@NgModule`:

1. **`declarations`** – Ги содржи сите компоненти и директиви кои припаѓаат на овој модул.  
2. **`imports`** – Ги вклучува другите модули кои се потребни (*`BrowserModule`* за работа во browser, *`AppRoutingModule`* за рутирање).  
3. **`providers`** – Ги дефинира сервисите и токените за dependency injection.  
4. **`bootstrap`** – Ја одредува главната компонента која ќе се стартува.  

---

## Експортирање од NgModule

NgModule може да **експортира** (`export`) свои декларирани компоненти и директиви, така што тие ќе бидат достапни за други компоненти и **NgModule-и**.

---

## BehaviorSubject во Angular

**BehaviorSubject** е вид на *RxJS Subject* кој:

- 📌 Ја **зачувува последната вредност** што била емитирана.  
- 📌 Новите **subscribers** веднаш ја добиваат последната вредност.  
- 📌 Се користи често за **state management** во Angular апликации.  

**Пример: Користење на BehaviorSubject во сервис**

```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieStateService {
  private movieSource = new BehaviorSubject<string>('Inception');
  currentMovie$ = this.movieSource.asObservable();

  changeMovie(title: string) {
    this.movieSource.next(title);
  }
}
```

**Користење во компонента:**

```typescript
import { Component, OnInit } from '@angular/core';
import { MovieStateService } from './movie-state.service';

@Component({
  selector: 'app-movie-display',
  template: `<h2>Current Movie: {{ currentMovie }}</h2>`
})
export class MovieDisplayComponent implements OnInit {
  currentMovie!: string;

  constructor(private movieState: MovieStateService) {}

  ngOnInit() {
    this.movieState.currentMovie$.subscribe(movie => {
      this.currentMovie = movie;
    });
  }
}
```

---

📚 **Официјална документација:**  
[NgModules Overview – Angular](https://angular.dev/guide/ngmodules/overview)
