import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCronogramaComponent } from './cronograma/lista-cronograma.component';
import { DetalleCronogramaComponent } from './cronograma/detalle-cronograma.component';
import { NuevoCronogramaComponent } from './cronograma/nuevo-cronograma.component';
import { EditarCronogramaComponent } from './cronograma/editar-cronograma.component';

const routes: Routes = [
  {path: '', component: ListaCronogramaComponent},
  {path: 'detalle/:id', component: DetalleCronogramaComponent},
  {path: 'nuevo', component: NuevoCronogramaComponent},
  {path: 'editar/:id', component: EditarCronogramaComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
