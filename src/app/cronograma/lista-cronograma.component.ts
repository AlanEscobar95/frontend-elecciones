import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TokenService } from '../services/token.service';
import { CronogramaService } from '../services/cronograma.service';
import { Cronograma } from '../models/cronograma';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-cronograma',
  templateUrl: './lista-cronograma.component.html',
  styleUrls: ['./lista-cronograma.component.css']
})
export class ListaCronogramaComponent {
  cronogramas: Cronograma[] = [];
  listaVacia = undefined;
  isAdmin: boolean;

  constructor(
    private cronogramaService: CronogramaService,
    private tokenService: TokenService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.cargarCronogramas();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarCronogramas(): void {
    this.cronogramaService.lista().subscribe(
      data => {
        this.cronogramas = data;
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
        this.cronogramaService.delete(id).subscribe(res => this.cargarCronogramas());
        Swal.fire(
          'OK',
          'Cronograma Eliminado',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Cronograma no eliminado',
          'error'
        )
      }
    })
  }

  nuevo(): void {
    this.router.navigate(['/nuevo-cronograma']);
  }
}
