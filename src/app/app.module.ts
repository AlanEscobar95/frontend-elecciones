import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*===========Externals===========*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


/*===========HOME===========*/
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
/*===========REGISTRO Y LOGIN===========*/
import { RegistroComponent } from './auth/registro.component';
import { LoginComponent } from './auth/login/login.component';
/*=========================*/
import { SubirVotantesComponent } from './subir-votantes/subir-votantes.component';
import { interceptorProvider } from './interceptors/cronograma.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
/*===========CARGOS===========*/
import { ListaCargoComponent } from './cargo/lista-cargo.component';
import { NuevoCargoComponent } from './cargo/nuevo-cargo.component';
import { EditarCargoComponent } from './cargo/editar-cargo.component';
import { DetalleCargoComponent } from './cargo/detalle-cargo.component';
/*===========TAREAS===========*/
import { DetalleTareaComponent } from './tarea/detalle-tarea.component';
import { EditarTareaComponent } from './tarea/editar-tarea.component';
import { ListaTareaComponent } from './tarea/lista-tarea.component';
import { NuevaTareaComponent } from './tarea/nueva-tarea.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaTareaComponent,
    NuevaTareaComponent,
    EditarTareaComponent,
    DetalleTareaComponent,
    LoginComponent,
    SubirVotantesComponent,
    HomeComponent,
    MenuComponent,
    RegistroComponent,
    ListaUsuariosComponent,
    ListaCargoComponent,
    NuevoCargoComponent,
    EditarCargoComponent,
    DetalleCargoComponent,
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