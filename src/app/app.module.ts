import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Externals
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListaCronogramaComponent } from './cronograma/lista-cronograma.component';
import { NuevoCronogramaComponent } from './cronograma/nuevo-cronograma.component';
import { EditarCronogramaComponent } from './cronograma/editar-cronograma.component';
import { DetalleCronogramaComponent } from './cronograma/detalle-cronograma.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RegistroComponent } from './auth/registro.component';
import { LoginComponent } from './auth/login/login.component';
import { SubirVotantesComponent } from './subir-votantes/subir-votantes.component';
import { interceptorProvider } from './interceptors/cronograma.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaCronogramaComponent,
    NuevoCronogramaComponent,
    EditarCronogramaComponent,
    DetalleCronogramaComponent,
    LoginComponent,
    SubirVotantesComponent,
    HomeComponent,
    MenuComponent,
    RegistroComponent,
    ListaUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }