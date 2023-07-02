import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginUsuarioDto } from '../models/login-usuario.dto';
import { Observable } from 'rxjs';
import { NuevoUsuarioDto } from '../models/nuevo-usuario.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = environment.authURL;
  usuarioURL = environment.usuarioURL;

  constructor(private httpClient: HttpClient) { }
  public lista(): Observable<NuevoUsuarioDto[]> {
    return this.httpClient.get<NuevoUsuarioDto[]>(`${this.usuarioURL}`);
  }

  public detail(id: number): Observable<NuevoUsuarioDto> {
    return this.httpClient.get<NuevoUsuarioDto>(`${this.usuarioURL}${id}`);
  }

  public save(usuario: NuevoUsuarioDto): Observable<any> {
    return this.httpClient.post<any>(`${this.usuarioURL}`, usuario);
  }

  public update(id: number, usuario: NuevoUsuarioDto): Observable<any> {
    return this.httpClient.put<any>(`${this.usuarioURL}${id}`, usuario);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.usuarioURL}${id}`);
  }
  
  login(dto: LoginUsuarioDto): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'login', dto);
  }

  registro(dto: NuevoUsuarioDto): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', dto);
  }

}
