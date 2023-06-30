import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { PeriodoService } from '../services/periodo.service';
import { Periodo } from '../models/periodo';

@Component({
  selector: 'app-nuevo-periodo',
  templateUrl: './nuevo-periodo.component.html',
  styleUrls: ['./nuevo-periodo.component.css']
})

export class NuevoPeriodoComponent {
  nombrePeriodoLectivo = '';
  

  constructor(
    private periodoService: PeriodoService,
    private tokenService:TokenService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  isAdmin: boolean;

  ngOnInit() {
    this.isAdmin=this.tokenService.isAdmin();
  }

  onCreate(): void {
    const periodo = new Periodo(this.nombrePeriodoLectivo);
    this.periodoService.save(periodo).subscribe(
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
    this.router.navigate(['/lista-periodo']);
  }


}
