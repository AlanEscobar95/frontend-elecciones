import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { TipoListaService } from '../services/tipo-lista.service';
import { TipoLista } from '../models/tipo-lista';
@Component({
  selector: 'app-nuevo-tipo-lista',
  templateUrl: './nuevo-tipo-lista.component.html',
  styleUrls: ['./nuevo-tipo-lista.component.css']
})

export class NuevoTipoListaComponent {
  nombreTipoLista = '';
  

  constructor(
    private tipoListaService: TipoListaService,
    private tokenService:TokenService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  isAdmin: boolean;

  ngOnInit() {
    this.isAdmin=this.tokenService.isAdmin();
  }

  onCreate(): void {
    const tipoLista = new TipoLista(this.nombreTipoLista);
    this.tipoListaService.save(tipoLista).subscribe(
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
    this.router.navigate(['/lista-tipo-lista']);
  }


}
