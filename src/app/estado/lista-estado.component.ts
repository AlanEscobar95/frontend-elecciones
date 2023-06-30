import { Component, OnInit } from '@angular/core';
import { Estado } from '../models/estado';
import { TokenService } from '../services/token.service';
import { EstadoService } from '../services/estado.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-estado',
  templateUrl: './lista-estado.component.html',
  styleUrls: ['./lista-estado.component.css']
})

export class ListaEstadoComponent implements OnInit {
  
  estado: Estado[] = [];
  listaVacia = undefined;
  isAdmin: boolean;
  
  constructor(
    private estadoService: EstadoService,
    private tokenService: TokenService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.cargarEstados();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarEstados(): void {
    this.estadoService.lista().subscribe(
      data => {
        this.estado = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }

  borrar(id: number): void {

    Swal.fire({
      title: 'Estas Seguro',
      text: "No podras revertirlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.estadoService.delete(id).subscribe(res => this.cargarEstados());
        Swal.fire(
          'OK',
          'Cargo Eliminado',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Cargo no eliminado',
          'error'
        )
      }
    })
  }
  nuevo(): void {
    this.router.navigate(['/nuevo-estado']);
  }
}
