# Assignment00

This project is a demonstration of Cypress test automation, for a technical assessment. The assessment is to get career home at Plotly. This was created in under 12 hours by Thomas Dalsin, with zero prior knowledge of Cypress. Everything was self-taught, including the setup, configuration and troubleshooting of a new Cypress installation, and learning about Cypress in order to complete the tasks in the assesment.
The src folder is an empty project generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.

## Cypress Test Example
The purpose of assignment00 is to complete a set of tasks in an automated test framework. To show that I can learn Cypress quickly, and would be an asset to Plotly, I decided to use the Cypress framework.
### Installation
 * Install Cypress to have a stable framework
 * Grab the following files and put them in their respective folders:
   + cypress/e2e/cypress-web-assessment/1-4-full-run.cy.js
   + cypress/e2e/cypress-web-assessment/bonus-test.cy.js
   + cypress/support/commands.ts
If you already have a commands file in your support folder, grab the custom commands from the one in this repository and append them to your existing commands file.

### Before You Run
 Consider looking in the commands.ts file, where you can add a custom wait time.

### Execution
Direct run from command line:  npx cypress run --record --key f85ebc79-fee6-4585-8b3c-57a822d1257b
Open Cypress using command line:  npx cypress open
 * This is especially useful if you want to see the actual Web UI in action.

### Viewing Results
 The best way to view results is within Cypress. Otherwise you can review the screenshots in the screenshots folder and review test logs.

## Angular Project Notes
### Development server
To run the (empty) angular project, run `ng serve` for the empty dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
### Code scaffolding
Run `ng generate component component-name` to generate a new component for the Angular project. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
### Build
Run `ng build` to build the Angular project. The build artifacts will be stored in the `dist/` directory.
### Running unit tests
Run `ng test` to execute the Angular unit tests via [Karma](https://karma-runner.github.io).
### Running end-to-end tests
Run `ng e2e` to execute the Angular project's end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
