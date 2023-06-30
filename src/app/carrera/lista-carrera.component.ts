import { Component } from '@angular/core';
import { Carrera } from '../models/carrera';
import { CarreraService } from '../services/carrera.service';
import { TokenService } from '../services/token.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-carrera',
  templateUrl: './lista-carrera.component.html',
  styleUrls: ['./lista-carrera.component.css']
})
export class ListaCarreraComponent {
  carreras: Carrera[] = [];
  listaVacia = undefined;
  isAdmin: boolean;

  constructor(
    private carreraService: CarreraService,
    private tokenService: TokenService,
    private router: Router

    ) { }

  ngOnInit():void {
    this.cargarCarreras();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarCarreras(): void {
    this.carreraService.lista().subscribe(
      data => {
        this.carreras = data;
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
      this.carreraService.delete(id).subscribe(res => this.cargarCarreras());
      Swal.fire(
        'OK',
        'Cargo Eliminado',
        'success'
      )
    } else if (result.dismiss === Swal.DismissReason.cancel){
      Swal.fire(
        'Cancelado',
        'Cargo no eliminado',
        'error'
      )
    }
  })
    }


    nuevo(): void {
      this.router.navigate(['/nueva-carrera']);
    }
}
