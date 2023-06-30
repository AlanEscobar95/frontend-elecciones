import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TokenService } from '../services/token.service';
import { CargoService } from '../services/cargo.service';
import { Cargo } from '../models/cargo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-cargo',
  templateUrl: './lista-cargo.component.html',
  styleUrls: ['./lista-cargo.component.css']
})

export class ListaCargoComponent implements OnInit {
  cargos: Cargo[] = [];
  listaVacia = undefined;
  isAdmin: boolean;

  constructor(
    private cargoService: CargoService,
    private tokenService: TokenService,
    private router: Router

    
    ) { }

  ngOnInit():void {
    this.cargarCargos();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarCargos(): void {
    this.cargoService.lista().subscribe(
      data => {
        this.cargos = data;
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
      this.cargoService.delete(id).subscribe(res => this.cargarCargos());
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
      this.router.navigate(['/nuevo-cargo']);
    }
}
