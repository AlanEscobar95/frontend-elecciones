import { Component } from '@angular/core';
import { CronogramaService } from '../services/cronograma.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Cronograma } from '../models/cronograma';


@Component({
  selector: 'app-nuevo-cronograma',
  templateUrl: './nuevo-cronograma.component.html',
  styleUrls: ['./nuevo-cronograma.component.css']
})
export class NuevoCronogramaComponent {
  nomTarea = '';
  encargado='';
  fechaIni=new Date();
  fechaFin=new Date();

  constructor(
    private cronogramaService: CronogramaService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const cronograma = new Cronograma(this.nomTarea, this.encargado,this.fechaIni,this.fechaFin);
    this.cronogramaService.save(cronograma).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/']);
  }

  validarFechaInicio() {
    const fechaActual = new Date();
    const fechaInicio = new Date(this.fechaIni);
    return fechaInicio >= fechaActual;
  }

}
