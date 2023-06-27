import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCronogramaComponent } from './cronograma/lista-cronograma.component';
import { DetalleCronogramaComponent } from './cronograma/detalle-cronograma.component';
import { NuevoCronogramaComponent } from './cronograma/nuevo-cronograma.component';
import { EditarCronogramaComponent } from './cronograma/editar-cronograma.component';
import { SubirVotantesComponent } from './subir-votantes/subir-votantes.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './auth/registro.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { CronogramaGuard } from './guards/cronograma.guard';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lista', component: ListaCronogramaComponent, canActivate: [CronogramaGuard], data: { expectedRol: 'administrador' }},
  {path: 'subir-votante', component: SubirVotantesComponent, canActivate: [CronogramaGuard],data: { expectedRol: 'administrador' }},
  {path: 'detalle/:id', component: DetalleCronogramaComponent, canActivate: [CronogramaGuard], data: { expectedRol: 'administrador' }},
  {path: 'nuevo', component: NuevoCronogramaComponent, canActivate: [CronogramaGuard], data: { expectedRol: 'administrador' }},
  {path: 'editar/:id', component: EditarCronogramaComponent,canActivate: [CronogramaGuard],  data: { expectedRol: 'administrador' }},
  {path: 'login', component: LoginComponent,canActivate:[LoginGuard]},
  {path: 'registro', component: RegistroComponent,canActivate:[LoginGuard,CronogramaGuard],  data: { expectedRol: 'administrador' }},


  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
