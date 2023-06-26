import { Component, OnInit } from '@angular/core';
import { Cronograma } from '../models/cronograma';
import { CronogramaService } from '../services/cronograma.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-cronograma',
  templateUrl: './editar-cronograma.component.html',
  styleUrls: ['./editar-cronograma.component.css']
})
export class EditarCronogramaComponent implements OnInit {

  cronograma: Cronograma = null;

  constructor(
    private cronogramaService: CronogramaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.cronogramaService.detail(id).subscribe(
      data => {
        this.cronograma = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
        this.router.navigate(['/lista']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.cronogramaService.update(id, this.cronograma).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
        this.router.navigate(['/']);
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
    this.router.navigate(['/lista']);
  }

}
