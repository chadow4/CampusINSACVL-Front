# CampusINSACVL-Front

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Hierarchie  du projet : 

- ### app 
  - #### back-office (module BackOffice)
    - ######  Components (les composants propres au BackOffice)
    - ###### Pages (les composants qui font offices de pages pour BackOffice)
    - ###### Services (les services propres au backoffice)
    - ###### back-office.modules.ts (fichier de configuration du module BackOffice)
    - ###### back-office-routing.module.ts (fichier de configuration du routing du module BackOffice)
    
  - #### front-office (module FrontOffice)
    - ###### Components (les composants propres au FrontOffice)
    - ###### Pages (les composants qui font offices de pages pour FrontOffice)
    - ###### Services (les services propres au frontOffice)
    - ###### front-office.modules.ts (fichier de configuration du module FrontOffice)
    - ###### front-office-routing.module.ts (fichier de configuration du routing du module FrontOffice)
  - #### Shared (Éléments partagés entre les différents modules du projet)
    - ###### Components (les composants propres aux répertoire Shared)
    - ###### Services (les services propres aux répertoires Shared)
    - ###### Interceptor(les interceptors propres aux répertoires Shared)
  - #### app.component.html (fichier html gérant le routage du projet)
  - #### app.component.scss (fichier scss global de l'application (juste en dessous de styles.scss dans la hiérarchie))
  - #### app.component.ts (fichier typescript de l'application)
  - #### app.module.ts (module principal de l'application, il permet notamment de faire la liaison entre les différents modules)
  - #### app-routing.module.ts (fichier de configuration du routing pour l'application)
