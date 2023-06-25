import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
 import { LoginUsuarioDto } from 'src/app/models/login-usuario.dto';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
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
   constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private toastrService: ToastrService,
    private router: Router
  ) { }
   ngOnInit(): void {
  }
   onLogin(): void {
    this.usuario = new LoginUsuarioDto(this.nombreRol, this.nombre, this.correo, this.password);
    this.authService.login(this.usuario).subscribe(
      data => {
        if (data.token) {
          this.tokenService.setToken(data.token);
          this.router.navigate(['/']);
        } else {
          this.toastrService.error(data.response.message, 'Fail', { timeOut: 3000, positionClass: 'toast-top-center' });
        }
      },
      err => {
        this.toastrService.error(err.error.message, 'Fail', { timeOut: 3000, positionClass: 'toast-top-center' });
      }
    );
  }
}