import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CronogramaService } from '../services/cronograma.service';
import { Cronograma } from '../models/cronograma';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalle-cronograma',
  templateUrl: './detalle-cronograma.component.html',
  styleUrls: ['./detalle-cronograma.component.css']
})
export class DetalleCronogramaComponent {
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
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/lista-cronograma']);
  }
}
