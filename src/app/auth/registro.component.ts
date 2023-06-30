import { Component, OnInit } from '@angular/core';
import { NuevoUsuarioDto } from '../models/nuevo-usuario.dto';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  implements OnInit{
  usuario: NuevoUsuarioDto = null;
  nombreRol: string;
  nombre: string;
  apellido: string;
  carrera: string;
  jornada: string;
  correo: string;
  password: string;
  estadoUsuario: boolean;
  estadoVoto: boolean;
  
  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.nombreRol = "seleccionarRol";
    this.carrera = "seleccionarCarrera";
    this.jornada = "seleccionarJornada";

  }

    onRegister():void{
      this.spinner.show();
      this.usuario = new NuevoUsuarioDto(this.nombreRol,this.nombre,this.apellido,this.carrera,this.jornada, this.correo, this.password,this.estadoUsuario,this.estadoVoto);
      this.authService.registro(this.usuario).subscribe(
        data=> {
          this.toastrService.success(data.message, 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });
          this.spinner.hide();
          this.router.navigate(['/']);
        },
        err =>{
          this.toastrService.error(err.error.message, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });
          this.spinner.hide();
        }
      );
    }
    
}

