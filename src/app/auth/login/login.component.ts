import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
 import { LoginUsuarioDto } from 'src/app/models/login-usuario.dto';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { NgxSpinnerService } from "ngx-spinner";
 @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: LoginUsuarioDto = null;
  nombreRol: string;
  nombre: string;
  correo: string;
  password: string;
  roles: string[] = ['Administrador', 'Candidato', 'Votante'];
  
   constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private toastrService: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }
   ngOnInit(): void {
    this.nombreRol = "seleccionarRol";
  }
   onLogin(): void {
    this.spinner.show();
    this.usuario = new LoginUsuarioDto(this.nombreRol, this.nombre, this.correo, this.password);
    this.authService.login(this.usuario).subscribe(
      data => {
        if (data.token) {
          this.tokenService.setToken(data.token);
          this.router.navigate(['/']);
          this.spinner.hide();
        } else {
          this.toastrService.error(data.response.message, 'Fail', { timeOut: 3000, positionClass: 'toast-top-center' });
          this.spinner.hide();
        }
      },
      err => {
        this.toastrService.error(err.error.message, 'Fail', { timeOut: 3000, positionClass: 'toast-top-center' });
        this.spinner.hide();
      }
    );
  }
}