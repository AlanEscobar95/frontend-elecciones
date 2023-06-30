import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTareaComponent } from './tarea/lista-tarea.component';
import { DetalleTareaComponent } from './tarea/detalle-tarea.component';
import { NuevaTareaComponent } from './tarea/nueva-tarea.component';
import { EditarTareaComponent } from './tarea/editar-tarea.component';
import { SubirVotantesComponent } from './subir-votantes/subir-votantes.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './auth/registro.component';
import { LoginComponent } from './auth/login/login.component';
import { CronogramaGuard } from './guards/cronograma.guard';
import { LoginGuard } from './guards/login.guard';
import { ListaCargoComponent } from './cargo/lista-cargo.component';
import { DetalleCargoComponent } from './cargo/detalle-cargo.component';
import { EditarCargoComponent } from './cargo/editar-cargo.component';
import { NuevoCargoComponent } from './cargo/nuevo-cargo.component';
import { NuevaCarreraComponent } from './carrera/nueva-carrera.component';
import { ListaCarreraComponent } from './carrera/lista-carrera.component';
import { EditarCarreraComponent } from './carrera/editar-carrera.component';
import { DetalleCarreraComponent } from './carrera/detalle-carrera.component';
import { ListaEstadoComponent } from './estado/lista-estado.component';
import { DetalleEstadoComponent } from './estado/detalle-estado.component';
import { EditarEstadoComponent } from './estado/editar-estado.component';
import { NuevoEstadoComponent } from './estado/nuevo-estado.component';
import { ListaCronogramaComponent } from './cronograma/lista-cronograma.component';
import { DetalleCronogramaComponent } from './cronograma/detalle-cronograma.component';
import { EditarCronogramaComponent } from './cronograma/editar-cronograma.component';
import { NuevoCronogramaComponent } from './cronograma/nuevo-cronograma.component';
import { DetallePeriodoComponent } from './periodo/detalle-periodo.component';
import { EditarPeriodoComponent } from './periodo/editar-periodo.component';
import { ListaPeriodoComponent } from './periodo/lista-periodo.component';
import { NuevoPeriodoComponent } from './periodo/nuevo-periodo.component';
import { DetalleTipoListaComponent } from './tipo-lista/detalle-tipo-lista.component';
import { EditarTipoListaComponent } from './tipo-lista/editar-tipo-lista.component';
import { ListaTipoListaComponent } from './tipo-lista/lista-tipo-lista.component';
import { NuevoTipoListaComponent } from './tipo-lista/nuevo-tipo-lista.component';
import { DetalleListaComponent } from './lista/detalle-lista.component';
import { EditarListaComponent } from './lista/editar-lista.component';
import { NuevaListaComponent } from './lista/nueva-lista.component';
import { ListaComponent } from './lista/lista.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lista', component: ListaTareaComponent, canActivate: [CronogramaGuard], data: { expectedRol: 'administrador' }},
  {path: 'subir-votante', component: SubirVotantesComponent, canActivate: [CronogramaGuard],data: { expectedRol: 'administrador' }},
  {path: 'detalle/:id', component: DetalleTareaComponent, canActivate: [CronogramaGuard], data: { expectedRol: 'administrador' }},
  {path: 'nuevo', component: NuevaTareaComponent, canActivate: [CronogramaGuard], data: { expectedRol: 'administrador' }},
  {path: 'editar/:id', component: EditarTareaComponent,canActivate: [CronogramaGuard],  data: { expectedRol: 'administrador' }},
  {path: 'login', component: LoginComponent,canActivate:[LoginGuard]},
  {path: 'registro', component: RegistroComponent,canActivate:[CronogramaGuard],  data: { expectedRol: 'administrador' }},


  
  /*CARGOS*/
  {path: 'detalle/cargo/:id', component: DetalleCargoComponent },
  {path: 'editar/cargo/:id', component: EditarCargoComponent },
  {path: 'lista-cargo', component: ListaCargoComponent },
  {path: 'nuevo-cargo', component: NuevoCargoComponent },

  /*CARRERAS*/
  {path: 'detalle/carrera/:id', component: DetalleCarreraComponent },
  {path: 'editar/carrera/:id', component: EditarCarreraComponent },
  {path: 'lista-carrera', component: ListaCarreraComponent },
  {path: 'nueva-carrera', component: NuevaCarreraComponent },

  /*PERIODO*/
  {path: 'detalle/periodo/:id', component: DetallePeriodoComponent },
  {path: 'editar/periodo/:id', component: EditarPeriodoComponent },
  {path: 'lista-periodo', component: ListaPeriodoComponent },
  {path: 'nuevo-periodo', component: NuevoPeriodoComponent },

  /*ESTADO*/
  {path: 'detalle/estado/:id', component: DetalleEstadoComponent },
  {path: 'editar/estado/:id', component: EditarEstadoComponent },
  {path: 'lista-estado', component: ListaEstadoComponent },
  {path: 'nueva-estado', component: NuevoEstadoComponent },

  /*CRONOGRAMA*/
  {path: 'detalle/cronograma/:id', component: DetalleCronogramaComponent },
  {path: 'editar/cronograma/:id', component: EditarCronogramaComponent },
  {path: 'lista-cronograma', component: ListaCronogramaComponent },
  {path: 'nuevo-cronograma', component: NuevoCronogramaComponent },

  /*TIPO LISTA*/
  {path: 'detalle/tipo-lista/:id', component: DetalleTipoListaComponent },
  {path: 'editar/tipo-lista/:id', component: EditarTipoListaComponent },
  {path: 'lista-tipo-lista', component: ListaTipoListaComponent },
  {path: 'nuevo-tipo-lista', component: NuevoTipoListaComponent },

  /*LISTA*/
  {path: 'detalle/lista/:id', component: DetalleListaComponent },
  {path: 'editar/lista/:id', component: EditarListaComponent },
  {path: 'listar-lista', component: ListaComponent },
  {path: 'nueva-lista', component: NuevaListaComponent },


  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
