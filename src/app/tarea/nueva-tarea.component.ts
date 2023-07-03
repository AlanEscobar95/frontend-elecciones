import { Component } from '@angular/core';
import { TareaService } from '../services/tarea.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { Tarea } from '../models/tarea';


@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent {
  nombreTarea = '';
  descripcion = '';
  encargado='';
  fechaInicio=new Date();
  fechaFinalizacion=new Date();

  constructor(
    private tareaService: TareaService,
    private tokenService:TokenService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  isAdmin: boolean;

  ngOnInit() {
    this.isAdmin=this.tokenService.isAdmin();
  }

  onCreate(): void {
    const tarea= new Tarea(this.nombreTarea,this.descripcion, this.encargado,this.fechaInicio,this.fechaFinalizacion);
    this.tareaService.save(tarea).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }


  volver(): void {
    this.router.navigate(['/lista']);
  }

  validarFechaInicio() {
    const fechaActual = new Date();
    const fechaInicio = new Date(this.fechaInicio);
    return fechaInicio >= fechaActual;
  }

  validarFechaFinalizacion() {
    const fechaActual = new Date();
    const fechaFinalizacion = new Date(this.fechaFinalizacion);
    return fechaFinalizacion >= fechaActual;
  }
}
