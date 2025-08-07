# Добредојдовте на Angular 🎉

Ова е последниот задолжителен предмет за оваа година.

---

## 📌 Што е Angular?

**Angular** е фрејмворк изграден од Google со кој може да изградиме **брзи и сигурни SPA (Single Page Application)** апликации.

- Ние ќе ја користиме најновата верзија: **v20**
- Angular работи со **TypeScript**

---

## 🚀 Инсталација и Почеток

### 1. Инсталирање на Angular CLI

```bash
npm install -g @angular/cli
```

### 2. Креирање на проект

```bash
ng new
```

Angular CLI ќе ве праша неколку прашања:

- **Do you want to create a 'zoneless' application without zone.js?** → Изберете **No**
- **Stylesheet format:** → Изберете **Sass (SCSS)**
- **Enable Server-Side Rendering?** → Изберете **No**

### 3. Влезете во папката на проектот

```bash
cd my-first-angular-app
```

### 4. Стартување на дев сервер

```bash
npm start
# или
ng serve
```

---

## 🧩 Корисни Алатки

📦 Инсталирајте ја екстензијата: **Angular Language Service**  
➡️ Овозможува правилен autocomplete во HTML и TypeScript.

---

## 🧱 Структура на Angular Апликација

Сè што ќе напишеме во Angular апликацијата ќе биде изрендерирано во `<app-root>` тагот во `index.html`.

### Секоја компонента е составена од:

1. `*.html` – темплејт
2. `*.scss` – стилови
3. `*.ts` – логика

---

## ⚙️ Генерирање на компонента

Користиме CLI команда:

```bash
ng generate component component-name
# или скратено
ng g c component-name
```

### Забелешка:

Секоја Angular компонента претставува **класа**.

---

## 📚 Официјална Angular Документација

[🔗 Angular.dev Overview](https://angular.dev/overview)
