import { Component } from '@angular/core';
import { EstadoService } from '../services/estado.service';
import { TokenService } from '../services/token.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Estado } from '../models/estado';
@Component({
  selector: 'app-nuevo-estado',
  templateUrl: './nuevo-estado.component.html',
  styleUrls: ['./nuevo-estado.component.css']
})
export class NuevoEstadoComponent {

  nombreEstado = '';
  
  constructor(
    private estadoService: EstadoService,
    private tokenService:TokenService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  isAdmin: boolean;

  ngOnInit() {
    this.isAdmin=this.tokenService.isAdmin();
  }

  onCreate(): void {
    const estado = new Estado(this.nombreEstado);
    this.estadoService.save(estado).subscribe(
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
    this.router.navigate(['/lista-estado']);
  }

}
