import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TokenService } from '../services/token.service';
import { Tarea } from '../models/tarea';
import { TareaService } from '../services/tarea.service';



@Component({
  selector: 'app-lista-tarea',
  templateUrl: './lista-tarea.component.html',
  styleUrls: ['./lista-tarea.component.css']
})
export class ListaTareaComponent implements OnInit {
  tareas: Tarea[] = [];
  listaVacia = undefined;
  isAdmin: boolean;

  constructor(
    private tareaService: TareaService,
    private tokenService: TokenService,
    ) { }

  ngOnInit():void {
    this.cargarTareas();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarTareas(): void {
    this.tareaService.lista().subscribe(
      data => {
        this.tareas = data;
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
      this.tareaService.delete(id).subscribe(res => this.cargarTareas());
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
