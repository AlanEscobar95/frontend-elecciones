import { Component } from '@angular/core';
import { Lista } from '../models/lista';
import { ListaService } from '../services/lista.service';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';


@Component({
  selector: 'app-lista-votante',
  templateUrl: './lista-votante.component.html',
  styleUrls: ['./lista-votante.component.css']
})
export class ListaVotanteComponent {
  listas: Lista[] = [];
  listaVacia = undefined;
  isLogged: boolean;
 

  constructor(
    private listaService: ListaService,
    private tokenService: TokenService,
    private router: Router

    ) { }

  ngOnInit():void {
    this.cargarListas();
    this.isLogged = this.tokenService.isLogged();
  }

  cargarListas(): void {
    this.listaService.lista().subscribe(
      data => {
        this.listas = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listar-votante']);
  }


}
