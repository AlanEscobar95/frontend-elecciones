import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EstadoService } from '../services/estado.service';
import { Estado } from '../models/estado';


@Component({
  selector: 'app-detalle-estado',
  templateUrl: './detalle-estado.component.html',
  styleUrls: ['./detalle-estado.component.css']
})
export class DetalleEstadoComponent {

  estado: Estado = null;

  constructor(
    private EstadoService: EstadoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.EstadoService.detail(id).subscribe(
      data => {
        this.estado = data;
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
