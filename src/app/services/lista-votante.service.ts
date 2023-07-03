import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lista } from '../models/lista';
import { NuevoUsuarioDto } from '../models/nuevo-usuario.dto';
import { Voto } from '../models/voto';
import { TokenService } from './token.service';
import { LoginUsuarioDto } from '../models/login-usuario.dto';


@Injectable({
  providedIn: 'root'
})
export class ListaVotanteService {
  votosURL = environment.votosURL;
  listasURL = environment.listaURL;
  usuariosURL = environment.usuarioURL;

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  isLogged(): boolean {
    return this.getToken() !== null;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  public lista(id: number): Observable<Lista> {
    return this.httpClient.get<Lista>(`${this.listasURL}${id}`);
  }

  public usuario(id: number): Observable<LoginUsuarioDto> {
    return this.httpClient.get<LoginUsuarioDto>(`${this.usuariosURL}${id}`);
  }

  public save(voto: Voto): Observable<any> {
    return this.httpClient.post<any>(`${this.votosURL}`, voto);
  }

  getIdUsuario(): number | null {
  if (!this.isLogged()) {
    return null;
  }

  try {
    const token = this.getToken();
    const payload = token.split('.')[1];
    const decodedPayload = atob(payload);
    const valuesJson = JSON.parse(decodedPayload);
    const idUsuario = valuesJson.id;
    return idUsuario;
  } catch (error) {
    console.error('Error decoding token payload:', error);
    return null;
  }
}

}
