import { Component, OnInit } from '@angular/core';
import { Cronograma } from '../models/cronograma';
import { CronogramaService } from '../services/cronograma.service';
import Swal from 'sweetalert2';
import { TokenService } from '../services/token.service';



@Component({
  selector: 'app-lista-cronograma',
  templateUrl: './lista-cronograma.component.html',
  styleUrls: ['./lista-cronograma.component.css']
})
export class ListaCronogramaComponent implements OnInit {
  cronogramas: Cronograma[] = [];
  listaVacia = undefined;
  isAdmin: boolean;

  constructor(
    private cronogramaService: CronogramaService,
    private tokenService: TokenService,
    ) { }

  ngOnInit():void {
    this.cargarTareas();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarTareas(): void {
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
      this.cronogramaService.delete(id).subscribe(res => this.cargarTareas());
      Swal.fire(
        'OK',
        'Tarea Eliminada',
        'success'
      )
    } else if (result.dismiss === Swal.DismissReason.cancel){
      Swal.fire(
        'Cancelado',
        'Tarea no eliminada',
        'error'
      )
    }
  })
    }
}
