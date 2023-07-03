import { Component } from '@angular/core';
import { ListaService } from '../services/lista.service';
import { TokenService } from '../services/token.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Lista } from '../models/lista';

@Component({
  selector: 'app-nueva-lista',
  templateUrl: './nueva-lista.component.html',
  styleUrls: ['./nueva-lista.component.css']
})
export class NuevaListaComponent {
  nombreLista = '';
  slogan = '';
  propuestas = '';
  color= '';
  numeroLista = 0;
  imagenLogo = '';
  
  constructor(
    private listaService: ListaService,
    private tokenService:TokenService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  isLogged: boolean;
  isCandidate: boolean;

  ngOnInit() {
    this.isLogged=this.tokenService.isLogged();
    this.isCandidate=this.tokenService.isCandidate();
  }

  onCreate(): void {
    const lista = new Lista(this.nombreLista,this.slogan,this.propuestas,this.color,this.numeroLista,this.imagenLogo);
    this.listaService.save(lista).subscribe(
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
    this.router.navigate(['/listar-lista']);
  }


}
