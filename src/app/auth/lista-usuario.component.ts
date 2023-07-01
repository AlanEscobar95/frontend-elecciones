import { Component } from '@angular/core';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NuevoUsuarioDto } from '../models/nuevo-usuario.dto';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent {
  usuario: NuevoUsuarioDto[] = [];
  listaVacia = undefined;
  isAdmin: boolean;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router

    ) { }

  ngOnInit():void {
    this.cargarUsuario();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarUsuario(): void {
    this.authService.lista().subscribe(
      data => {
        this.usuario = data;
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
      this.authService.delete(id).subscribe(res => this.cargarUsuario());
      Swal.fire(
        'OK',
        'Usuario Eliminado',
        'success'
      )
    } else if (result.dismiss === Swal.DismissReason.cancel){
      Swal.fire(
        'Cancelado',
        'Usuario no eliminado',
        'error'
      )
    }
  })
    }

    nuevo(): void {
      this.router.navigate(['/nuevo-usuario']);
    }
}
