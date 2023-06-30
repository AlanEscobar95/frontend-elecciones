import { Component } from '@angular/core';
import { Lista } from '../models/lista';
import Swal from 'sweetalert2';
import { ListaService} from '../services/lista.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  listas: Lista[] = [];
  listaVacia = undefined;
  isLogged: boolean;

  constructor(
    private listaService: ListaService,
    private tokenService: TokenService,
    private router: Router

    ) { }

  ngOnInit():void {
    this.cargarListas();
    this.isLogged = this.tokenService.isLogged();
  }

  cargarListas(): void {
    this.listaService.lista().subscribe(
      data => {
        this.listas = data;
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
      this.listaService.delete(id).subscribe(res => this.cargarListas());
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
      this.router.navigate(['/nueva-lista']);
    }
}
