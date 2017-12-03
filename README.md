# IdleProtractorExample

This example is intended to show how @ng-idle/core@2.0.0-beta.12
prevents protractor from completing calls as it waits for waitForAngular() implicitly. 
The setInterval in the idle service makes it appear that Angular is constantly busy.
Reference: https://github.com/angular/angular/issues/8089

In terminal 1: npm install, npm run pree2e, npm run e2e

You may comment out the line `idleService.watch()` in app.component to see the E2E test succeed. You may also replace @ng-idle/core with https://github.com/wesley-trantham/ng2-idle/tree/bug/e2e-protractor-speed, which is my fix to both the hanging and how slow your E2E tests would run with only the zone fix.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
