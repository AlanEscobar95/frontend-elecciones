import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*===========Externals===========*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
/*=========SIDEBAR===========*/
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


/*===========HOME===========*/
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
/*===========REGISTRO Y LOGIN===========*/
import { LoginComponent } from './auth/login/login.component';
/*=========================*/
import { SubirVotantesComponent } from './subir-votantes/subir-votantes.component';
import { interceptorProvider } from './interceptors/cronograma.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
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
/*===========CARRERA===========*/
import { ListaCarreraComponent } from './carrera/lista-carrera.component';
import { NuevaCarreraComponent } from './carrera/nueva-carrera.component';
import { DetalleCarreraComponent } from './carrera/detalle-carrera.component';
import { EditarCarreraComponent } from './carrera/editar-carrera.component';
/*===========CRONOGRAMA===========*/
import { ListaCronogramaComponent } from './cronograma/lista-cronograma.component';
import { NuevoCronogramaComponent } from './cronograma/nuevo-cronograma.component';
import { DetalleCronogramaComponent } from './cronograma/detalle-cronograma.component';
import { EditarCronogramaComponent } from './cronograma/editar-cronograma.component';
/*===========ESTADO===========*/
import { NuevoEstadoComponent } from './estado/nuevo-estado.component';
import { ListaEstadoComponent } from './estado/lista-estado.component';
import { EditarEstadoComponent } from './estado/editar-estado.component';
import { DetalleEstadoComponent } from './estado/detalle-estado.component';
/*===========PERIODOS===========*/
import { ListaPeriodoComponent } from './periodo/lista-periodo.component';
import { NuevoPeriodoComponent } from './periodo/nuevo-periodo.component';
import { EditarPeriodoComponent } from './periodo/editar-periodo.component';
import { DetallePeriodoComponent } from './periodo/detalle-periodo.component';
/*===========LISTA===========*/
import { ListaComponent } from './lista/lista.component';
import { DetalleListaComponent } from './lista/detalle-lista.component';
import { EditarListaComponent } from './lista/editar-lista.component';
import { NuevaListaComponent } from './lista/nueva-lista.component';
/*===========TIPOLISTA===========*/
import { ListaTipoListaComponent } from './tipo-lista/lista-tipo-lista.component';
import { NuevoTipoListaComponent } from './tipo-lista/nuevo-tipo-lista.component';
import { EditarTipoListaComponent } from './tipo-lista/editar-tipo-lista.component';
import { DetalleTipoListaComponent } from './tipo-lista/detalle-tipo-lista.component';
import { SidenavComponent } from './sidenav/sidenav.component';
/*===========Usuarios===========*/

import { RegistroComponent } from './auth/registro.component';
import { EditarUsuarioComponent } from './auth/editar-usuario.component';
import { DetalleUsuarioComponent } from './auth/detalle-usuario.component';
import { ListaUsuarioComponent } from './auth/lista-usuario.component';
import { ListaVotanteComponent } from './lista-votante/lista-votante.component';
import { FooterComponent } from './footer/footer.component';
import { RegistroVotanteComponent } from './auth/registro-votante/registro-votante.component';

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
    ListaCargoComponent,
    NuevoCargoComponent,
    EditarCargoComponent,
    DetalleCargoComponent,
    ListaCarreraComponent,
    NuevaCarreraComponent,
    DetalleCarreraComponent,
    EditarCarreraComponent,
    ListaCronogramaComponent,
    NuevoCronogramaComponent,
    ListaEstadoComponent,
    EditarCronogramaComponent,
    NuevoEstadoComponent,
    DetalleCronogramaComponent,
    EditarEstadoComponent,
    DetalleEstadoComponent,
    ListaPeriodoComponent,
    NuevoPeriodoComponent,
    EditarPeriodoComponent,
    DetallePeriodoComponent,
    ListaComponent,
    DetalleListaComponent,
    EditarListaComponent,
    NuevaListaComponent,
    ListaTipoListaComponent,
    NuevoTipoListaComponent,
    EditarTipoListaComponent,
    DetalleTipoListaComponent,
    SidenavComponent,
    ListaUsuarioComponent,
    EditarUsuarioComponent,
    DetalleUsuarioComponent,
    ListaVotanteComponent,
    FooterComponent,
    RegistroVotanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    /*=====SIDEBAR====*/
    MatSidenavModule,
    MatListModule,
    ToastrModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
