import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//externals
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListaCronogramaComponent } from './cronograma/lista-cronograma.component';
import { NuevoCronogramaComponent } from './cronograma/nuevo-cronograma.component';
import { EditarCronogramaComponent } from './cronograma/editar-cronograma.component';
import { DetalleCronogramaComponent } from './cronograma/detalle-cronograma.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCronogramaComponent,
    NuevoCronogramaComponent,
    EditarCronogramaComponent,
    DetalleCronogramaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
