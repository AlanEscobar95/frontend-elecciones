import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CargoService } from '../services/cargo.service';
import { Cargo } from '../models/cargo';


@Component({
  selector: 'app-detalle-cargo',
  templateUrl: './detalle-cargo.component.html',
  styleUrls: ['./detalle-cargo.component.css']
})
export class DetalleCargoComponent {
  cargo: Cargo = null;

  constructor(
    private cargoService: CargoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.cargoService.detail(id).subscribe(
      data => {
        this.cargo = data;
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
    this.router.navigate(['/lista-cargo']);
  }
}

