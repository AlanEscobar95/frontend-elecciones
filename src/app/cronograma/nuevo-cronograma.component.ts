import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { CronogramaService } from '../services/cronograma.service';
import { Cronograma } from '../models/cronograma';

@Component({
  selector: 'app-nuevo-cronograma',
  templateUrl: './nuevo-cronograma.component.html',
  styleUrls: ['./nuevo-cronograma.component.css']
})
export class NuevoCronogramaComponent {
  nombreCronograma = '';
  

  constructor(
    private cronogramaService: CronogramaService,
    private tokenService:TokenService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  isAdmin: boolean;

  ngOnInit() {
    this.isAdmin=this.tokenService.isAdmin();
  }

  onCreate(): void {
    const cronograma = new Cronograma(this.nombreCronograma);
    this.cronogramaService.save(cronograma).subscribe(
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
    this.router.navigate(['/lista-cronograma']);
  }

}
