import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { CargoService } from '../services/cargo.service';
import { Cargo } from '../models/cargo';

@Component({
  selector: 'app-nuevo-cargo',
  templateUrl: './nuevo-cargo.component.html',
  styleUrls: ['./nuevo-cargo.component.css']
})
export class NuevoCargoComponent {
  nombreCargo = '';
  

  constructor(
    private cargoService: CargoService,
    private tokenService:TokenService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  isAdmin: boolean;

  ngOnInit() {
    this.isAdmin=this.tokenService.isAdmin();
  }

  onCreate(): void {
    const cargo = new Cargo(this.nombreCargo);
    this.cargoService.save(cargo).subscribe(
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
    this.router.navigate(['/lista-cargo']);
  }


}
