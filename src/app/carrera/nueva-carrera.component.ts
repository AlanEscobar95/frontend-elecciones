import { Component } from '@angular/core';
import { CarreraService } from '../services/carrera.service';
import { TokenService } from '../services/token.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Carrera } from '../models/carrera';

@Component({
  selector: 'app-nueva-carrera',
  templateUrl: './nueva-carrera.component.html',
  styleUrls: ['./nueva-carrera.component.css']
})
export class NuevaCarreraComponent {
  nombreCarrera = '';
  
  constructor(
    private carreraService: CarreraService,
    private tokenService:TokenService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  isAdmin: boolean;

  ngOnInit() {
    this.isAdmin=this.tokenService.isAdmin();
  }

  onCreate(): void {
    const carrera = new Carrera(this.nombreCarrera);
    this.carreraService.save(carrera).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }
  
  volver(): void {
    this.router.navigate(['/lista-carrera']);
  }

}
