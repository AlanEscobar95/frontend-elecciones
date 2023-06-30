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


  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
