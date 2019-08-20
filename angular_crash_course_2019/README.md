# Angular Crash Course 2019

* <https://www.youtube.com/watch?v=Fdf5aTYRW0E>
* AngularJS was released in 2010. It is not recommended and should be updated to Angular.
* Angular refers to version 2+. Right now we are on version 7 but 2 - 7 is the same framework with a few changes, mostly under the hood.
* Why use angular?
  * Organized front-end structure (Components, Modules, Services)
  * Extremely powerful and full featured.
  * All in one solution (Routing, HTTP, RxJS, etc)
  * Build powerful SPA apps.
  * MVC - Model, View, Controller design pattern.
  * Typescript
  * Fantastic CLI
* What you should know before learning angular
  * JS fundamentals (objects, arrays, conditionals, etc)
  * typescript
  * classes
  * high order array methods - forEach, map, filter.
  * arrow functions
  * promises and observables.
  * mvc pattern
* The angular way
  * uses typescript for static types (Variables, functions, params)
  * component based (like other frameworks)
  * uses "services" to share data/functionality between components.
  * concepts of "modules" (root module, forms module, http module, etc.)
  * Uses RxJS "observables" for async operations.
  * Steep learning curve relative to other frameworks.
* The anatomy of a component.

```bash
import { Component, OnInit } from '@angular/core`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  name: string = 'Brad';
  age: number = 37;

  constructor(**services import here**){}
  ngOnInit() {
    // runs when component is created
  }
}
```

* Angular CLI
  * Powerful tool for generating apps, modules, components, services, etc.

  ```bash
  ng new myapp
  ng serve
  ng build
  ```

  ```bash
  ng generate component todos
  ng generate service todo
  ng generate module app-routing
  ```

* State management
  * you can use state managers like ngrx and redux with angular for larger apps.
  * I find it less necessary due to the overall structure of the framework and services which are used to share data and functionality.

* Install angular cli

```bash
npm install -g @angular/cli
```

* Generate a new application

```bash
ng -- version
ng new angular-crash-todolist
```

* Run dev server that angular/cli provides

```bash
ng serve --open
```

* Generate a new component

```bash
ng generate component components/Todos
```

* Shorthand to generate a new component

```bash
 ng g c components/TodoItem
 ```

* Generate a service

```bash
ng g s services/Todo
```
