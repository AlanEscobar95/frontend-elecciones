import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoListaService } from '../services/tipo-lista.service';
import { TipoLista } from '../models/tipo-lista';

@Component({
  selector: 'app-detalle-tipo-lista',
  templateUrl: './detalle-tipo-lista.component.html',
  styleUrls: ['./detalle-tipo-lista.component.css']
})
export class DetalleTipoListaComponent {
  tipoLista: TipoLista = null;

  constructor(
    private tipoListaService: TipoListaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.tipoListaService.detail(id).subscribe(
      data => {
        this.tipoLista = data;
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
    this.router.navigate(['/lista-tipo-lista']);
  }
}

