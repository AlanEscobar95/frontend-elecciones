import { Component } from '@angular/core';
import { Lista } from '../models/lista';
import { ListaService } from '../services/lista.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalle-lista',
  templateUrl: './detalle-lista.component.html',
  styleUrls: ['./detalle-lista.component.css']
})
export class DetalleListaComponent {
  lista: Lista = null;

  constructor(
    private listaService: ListaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.listaService.detail(id).subscribe(
      data => {
        this.lista = data;
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
    this.router.navigate(['/listar-lista']);
  }

}
