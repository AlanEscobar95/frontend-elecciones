import { Component } from '@angular/core';
import { Lista } from '../models/lista';
import { ListaService } from '../services/lista.service';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { ListaVotanteService } from '../services/lista-votante.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-lista-votante',
  templateUrl: './lista-votante.component.html',
  styleUrls: ['./lista-votante.component.css']
})
export class ListaVotanteComponent {
  listas: Lista[] = [];
  listaVacia = undefined;
  isVoter: boolean;
  isLogged: boolean;
  
  constructor(
    private listaService: ListaService,
    private tokenService: TokenService,
    private listaVotanteService: ListaVotanteService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarListas();
    this.isLogged=this.tokenService.isLogged();
    this.isVoter = this.tokenService.isVoter();
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

  votar(idLista: number): void {
    const idUsuario = this.listaVotanteService.getIdUsuario();
    console.log('ID de usuario:', idUsuario);
    console.log('ID de lista:', idLista); 
    
    if (idUsuario) {
      const voto = {
        fechaVoto: new Date(),
        idUsuario: idUsuario,
        idLista: idLista
      };
      this.listaVotanteService.save(voto).subscribe(
        () => {
          console.log('El voto se registró correctamente');
          this.toastr.success('Gracias por votar', 'Voto Registrado', { timeOut: 3000 })
          this.router.navigate(['/lista-votante']);
        },
        error => {
          console.error('Error al registrar el voto:', error);
        }
      );
    } else {
      console.error('ID de usuario no disponible.');
    }
  }
}
  
