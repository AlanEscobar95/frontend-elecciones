// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  tareasURL: 'http://localhost:3000/tareas/',
  cargoURL: 'http://localhost:3000/cargos/',
  carreraURL: 'http://localhost:3000/carreras/',
  periodoURL: 'http://localhost:3000/periodoLectivo/',
  authURL: 'http://localhost:3000/auth/',
  cronogramaURL: 'http://localhost:3000/cronograma/',
  estadoURL:'http://localhost:3000/estados/',
  tipoListaURL:'http://localhost:3000/tipo-listas/',

  listaURL:'http://localhost:3000/listas/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
