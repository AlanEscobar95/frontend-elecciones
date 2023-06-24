import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCronogramaComponent } from './cronograma/lista-cronograma.component';
import { DetalleCronogramaComponent } from './cronograma/detalle-cronograma.component';
import { NuevoCronogramaComponent } from './cronograma/nuevo-cronograma.component';
import { EditarCronogramaComponent } from './cronograma/editar-cronograma.component';
import { VotantesComponent } from './votantes/votantes.component';
import { SubirVotantesComponent } from './subir-votantes/subir-votantes.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './auth/registro.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lista', component: ListaCronogramaComponent},
  {path: 'votantes', component: VotantesComponent},
  {path: 'subir-votante', component: SubirVotantesComponent},
  {path: 'detalle/:id', component: DetalleCronogramaComponent},
  {path: 'nuevo', component: NuevoCronogramaComponent},
  {path: 'editar/:id', component: EditarCronogramaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},


  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
