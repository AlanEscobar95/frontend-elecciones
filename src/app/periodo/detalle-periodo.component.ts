import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PeriodoService } from '../services/periodo.service';
import { Periodo } from '../models/periodo';



@Component({
  selector: 'app-detalle-periodo',
  templateUrl: './detalle-periodo.component.html',
  styleUrls: ['./detalle-periodo.component.css']
})

export class DetallePeriodoComponent {
  periodo: Periodo = null;

  constructor(
    private periodoService: PeriodoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.periodoService.detail(id).subscribe(
      data => {
        this.periodo = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }
  
  volver(): void {
    this.router.navigate(['/lista-periodo']);
  }
}

