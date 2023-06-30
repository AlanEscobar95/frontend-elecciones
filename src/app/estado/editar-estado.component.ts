import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EstadoService } from '../services/estado.service';
import { Estado } from '../models/estado';

@Component({
  selector: 'app-editar-estado',
  templateUrl: './editar-estado.component.html',
  styleUrls: ['./editar-estado.component.css']
})
export class EditarEstadoComponent {
  estado: Estado = null;

  constructor(
    private estadoService: EstadoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.estadoService.detail(id).subscribe(
      data => {
        this.estado = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
        this.router.navigate(['/lista-estado']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.estadoService.update(id, this.estado).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
        this.router.navigate(['/lista-estado']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();

      }
    );
  }

  volver(): void {
    this.router.navigate(['/lista-estado']);
  }
}
