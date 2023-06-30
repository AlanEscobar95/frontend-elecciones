import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PeriodoService } from '../services/periodo.service';
import { Periodo } from '../models/periodo';

@Component({
  selector: 'app-editar-periodo',
  templateUrl: './editar-periodo.component.html',
  styleUrls: ['./editar-periodo.component.css']
})

export class EditarPeriodoComponent implements OnInit {

  periodo: Periodo = null;

  constructor(
    private periodolectivoService: PeriodoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.periodolectivoService.detail(id).subscribe(
      data => {
        this.periodo = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
        this.router.navigate(['/lista-periodo']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.periodolectivoService.update(id, this.periodo).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
        this.router.navigate(['/lista-periodo']);
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
