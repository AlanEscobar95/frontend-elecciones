import { Component } from '@angular/core';
import { Carrera } from '../models/carrera';
import { CarreraService } from '../services/carrera.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalle-carrera',
  templateUrl: './detalle-carrera.component.html',
  styleUrls: ['./detalle-carrera.component.css']
})
export class DetalleCarreraComponent {
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
