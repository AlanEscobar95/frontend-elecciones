import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TokenService } from '../services/token.service';
import { PeriodoService } from '../services/periodo.service';
import { Periodo } from '../models/periodo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-periodo',
  templateUrl: './lista-periodo.component.html',
  styleUrls: ['./lista-periodo.component.css']
})

export class ListaPeriodoComponent implements OnInit {
  periodos: Periodo[] = [];
  listaVacia = undefined;
  isAdmin: boolean;

  constructor(
    private periodoService: PeriodoService,
    private tokenService: TokenService,
    private router: Router

    ) { }

  ngOnInit():void {
    this.cargarPeriodos();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarPeriodos(): void {
    this.periodoService.lista().subscribe(
      data => {
        this.periodos = data;
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
      this.periodoService.delete(id).subscribe(res => this.cargarPeriodos());
      Swal.fire(
        'OK',
        'Periodo Eliminado',
        'success'
      )
    } else if (result.dismiss === Swal.DismissReason.cancel){
      Swal.fire(
        'Cancelado',
        'Periodo no eliminado',
        'error'
      )
    }
  })
    }

    nuevo(): void {
      this.router.navigate(['/nuevo-periodo']);
    }
}
