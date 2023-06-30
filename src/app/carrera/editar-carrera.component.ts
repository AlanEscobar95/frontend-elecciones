import { Component } from '@angular/core';
import { Carrera } from '../models/carrera';
import { CarreraService } from '../services/carrera.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-carrera',
  templateUrl: './editar-carrera.component.html',
  styleUrls: ['./editar-carrera.component.css']
})
export class EditarCarreraComponent {
  carrera: Carrera = null;

  constructor(
    private carreraService: CarreraService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.carreraService.detail(id).subscribe(
      data => {
        this.carrera = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
        this.router.navigate(['/lista-carrera']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.carreraService.update(id, this.carrera).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
        this.router.navigate(['/lista-carrera']);
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
    this.router.navigate(['/lista-carrera']);
  }

}
