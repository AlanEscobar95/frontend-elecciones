import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TokenService } from '../services/token.service';
import { TipoListaService } from '../services/tipo-lista.service';
import { TipoLista } from '../models/tipo-lista';
import { Router } from '@angular/router';



@Component({
  selector: 'app-lista-tipo-lista',
  templateUrl: './lista-tipo-lista.component.html',
  styleUrls: ['./lista-tipo-lista.component.css']
})

export class ListaTipoListaComponent implements OnInit {
  tipoListas: TipoLista[] = [];
  listaVacia = undefined;
  isAdmin: boolean;

  constructor(
    private tipoListaService: TipoListaService,
    private tokenService: TokenService,
    private router: Router

    ) { }

  ngOnInit():void {
    this.cargarTipoLista();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarTipoLista(): void {
    this.tipoListaService.lista().subscribe(
      data => {
        this.tipoListas = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }

  borrar(id: number):void {
    
  Swal.fire({
    title: 'Estas Seguro',
    text: "No podras revertirlo",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si',
    cancelButtonText:'No'
  }).then((result) => {
    if (result.value) {
      this.tipoListaService.delete(id).subscribe(res => this.cargarTipoLista());
      Swal.fire(
        'OK',
        'Tipo Lista Eliminado',
        'success'
      )
    } else if (result.dismiss === Swal.DismissReason.cancel){
      Swal.fire(
        'Cancelado',
        'Tipo Lista no eliminado',
        'error'
      )
    }
  })
    }

    nuevo(): void {
      this.router.navigate(['/nuevo-tipo-lista']);
    }
}
